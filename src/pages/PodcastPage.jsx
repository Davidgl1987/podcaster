import { useContext, useEffect, useState } from "react"
import { Card, Stack } from "react-bootstrap"
import { useParams } from "react-router-dom"
import EpisodesList from "../components/EpisodesList"
import { PodcastContext } from "../context/PodcastContext"

const PodcastPage = () => {

  const { podcastId } = useParams()

  const { podcasts, getPodcastEpisodes } = useContext(PodcastContext)

  const [ episodes, setEpisodes ] = useState([])

  const podcast = podcasts.find(podcast => podcast.id === podcastId)

  useEffect(() => {
    getPodcastEpisodes(podcastId).then(data => setEpisodes(data))
  }, [])

  if (!podcast) return null

  return (
    <Stack>
      <Card className="shadow p-2 px-3 mb-3">
        <Card.Title>Episodes: {episodes.length}</Card.Title>
      </Card>
      <EpisodesList episodes={episodes} />
    </Stack>
  )
}

export default PodcastPage