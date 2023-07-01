import { useEffect, useMemo, useState } from "react"
import { Card, Stack } from "react-bootstrap"
import { useParams } from "react-router-dom"
import EpisodesList from "../components/EpisodesList"
import { usePodcastContext } from "../context/PodcastContext"

const PodcastPage = () => {

  const { podcastId } = useParams()

  const { podcasts, getPodcastEpisodes } = usePodcastContext()

  const [ episodes, setEpisodes ] = useState([])

  const podcast = useMemo(() => 
    podcasts.find(podcast => podcast.id === podcastId),
  [podcasts, podcastId])

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