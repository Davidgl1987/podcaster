import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PodcastContext } from "../context/PodcastContext"

const EpisodePage = () => {

  const { podcastId, episodeId } = useParams()

  const { podcasts, getPodcastEpisodes } = useContext(PodcastContext)

  const [ episodes, setEpisodes ] = useState([])

  const podcast = podcasts.find(podcast => podcast.id === podcastId)

  const episode = episodes.find(episode => episode.id === Number(episodeId))

  useEffect(() => {
    getPodcastEpisodes(podcastId).then(data => setEpisodes(data))
  }, [])

  if (!podcast || !episode) return null

  return (
    <>
      <h3>Podcast {podcastId} Episode {episodeId}!</h3>
      <pre>podcast: {JSON.stringify(podcast, null, 2)}</pre>
      <pre>episode: {JSON.stringify(episode, null, 2)}</pre>
    </>
  )
}

export default EpisodePage