import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EpisodeDetail from "../components/EpisodeDetail"
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
      <EpisodeDetail episode={episode} />
    </>
  )
}

export default EpisodePage