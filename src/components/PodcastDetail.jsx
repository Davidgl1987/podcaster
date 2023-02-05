import { Card, Image, ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const PodcastDetail = ({podcast}) => {

  const navigate = useNavigate()

  return (
    <Card className="shadow p-3 align-items-center mb-3">
      <ListGroup>
        <ListGroup.Item className="border-start-0 border-end-0 border-top-0 text-center">
          <Image src={podcast.image} fluid rounded className="mb-3" role='button'
            onClick={() => navigate(`/podcast/${podcast.id}`)}
          />
        </ListGroup.Item>
        <ListGroup.Item className="border-start-0 border-end-0 ">
          <strong role='button' onClick={() => navigate(`/podcast/${podcast.id}`)}>
            {podcast.title}
          </strong>
          <p className="fst-italic" role='button' onClick={() => navigate(`/podcast/${podcast.id}`)}>
            by {podcast.artist}
          </p>
        </ListGroup.Item>
        <ListGroup.Item className="border-start-0 border-end-0 border-bottom-0">
          <strong>Description:</strong>
          <p className="fst-italic">{podcast.summary}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )

}

export default PodcastDetail