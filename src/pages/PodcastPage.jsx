import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PodcastContext } from "../context/PodcastContext"

const PodcastPage = () => {

  const { podcastId } = useParams()

  const { podcasts, getPodcastEpisodes } = useContext(PodcastContext)

  const [ episodes, setEpisodes ] = useState([])

  const podcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === podcastId)

  useEffect(() => {
    getPodcastEpisodes(podcastId).then(data => setEpisodes(data))
  }, [])

  if (!podcast) return null

  return (
    <>
      <h3>Podcast {podcastId}!</h3>
      <pre>podcast: {JSON.stringify(podcast, null, 2)}</pre>
      <pre>episodes: {JSON.stringify(episodes, null, 2)}</pre>
    </>
  )
}

export default PodcastPage