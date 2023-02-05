import { EpisodeModel } from "../models/EpisodeModel"
import { PodcastModel } from "../models/PodcastModel"
import { fetchOrCache } from "../utils"

export const URL_API_PODCASTS = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
export const URL_API_EPISODES = 'https://itunes.apple.com/lookup?&media=podcast&entity=podcastEpisode&limit=99&&id='

export const fetchPodcasts = async () => {
  let podcastsList = []
  try {
    const data = await fetchOrCache({url: URL_API_PODCASTS, key: 'podcasts'})
    podcastsList = data?.feed?.entry.map(podcast => PodcastModel(podcast))
  } catch (error) {
    console.error(error)
  }
  return podcastsList
}

export const fetchEpisodes = async (podcastId) => {
  let episodes = []
  try {
    const data = await fetchOrCache({url: URL_API_EPISODES + podcastId, key: `podcast_${podcastId}`})
    episodes = data?.results.map(episode => EpisodeModel(episode))
    episodes.shift() // El primero no tiene audio, parece una descripción del podcast...
  } catch (error) {
    console.error(error)
  }
  return episodes
}