import { useParams } from "react-router-dom"

const PodcastPage = () => {

  const { podcastId } = useParams()

  return (
    <h3>Podcast {podcastId}!</h3>
  )
}

export default PodcastPage