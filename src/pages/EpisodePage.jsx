import { useParams } from "react-router-dom"

const EpisodePage = () => {

  const { podcastId, episodeId } = useParams()

  return (
    <h3>Podcast {podcastId} Episode {episodeId}!</h3>
  )
}

export default EpisodePage