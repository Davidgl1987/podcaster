import { EpisodeModel } from "../models/EpisodeModel"
import { PodcastModel } from "../models/PodcastModel"

export const URL_API_PODCASTS = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
export const URL_API_EPISODES = 'https://itunes.apple.com/lookup?&media=podcast&entity=podcastEpisode&limit=99&&id='

export const fetchPodcasts = async () => {
  let podcastsList = []
  try {
    let data = await fetch(URL_API_PODCASTS)
    data = await data.json()
    podcastsList = data?.feed?.entry.map(podcast => PodcastModel(podcast))
  } catch (error) {
    console.error(error)
  }
  return podcastsList
}

export const fetchEpisodes = async (podcastId) => {
  let episodes = []
  try {
    let data = await fetch(URL_API_EPISODES+ podcastId)
    data = await data.json()
    episodes = data?.results.map(episode => EpisodeModel(episode))
  } catch (error) {
    console.error(error)
  }
  return episodes
}