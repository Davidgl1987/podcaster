import { Card, Image, Stack } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const PodcastItem = ({podcast}) => {

  const navigate = useNavigate()

  return (
    <div className="text-center mb-5" 
      onClick={() => navigate(`/podcast/${podcast.id}`)}
      role="button">
      <Image src={podcast.image} width={100} height={100} roundedCircle 
        style={{marginBottom: '-3em', zIndex: 2, position: 'relative'}}
      />
      <Card className="shadow-sm p-3 pt-5">
        <Stack className="text-center">
          <strong>{podcast.name.toUpperCase()}</strong>
          <div className="text-secondary">Author: {podcast.artist}</div>
        </Stack>
      </Card>
    </div>
  )
}

export default PodcastItem