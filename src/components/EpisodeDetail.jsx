import { Card } from "react-bootstrap"

const EpisodeDetail = ({episode}) => {
  return (
    <Card className="shadow p-3 mb-3">
      <Card.Title>{episode.name}</Card.Title>
      <Card.Text dangerouslySetInnerHTML={{__html: episode.description}} />
      <audio src={episode.url} className='w-100' controls />
    </Card>
  )
}

export default EpisodeDetail