import { useEffect, useState } from "react"
import { Badge, Col, Form, Row } from "react-bootstrap"
import PodcastItem from "../components/PodcastItem"
import { usePodcastContext } from "../context/PodcastContext"

const HomePage = () => {

  const { podcasts } = usePodcastContext()

  const [ filter, setFilter ] = useState('')
  const [ filteredPodcasts, setFilteredPodcasts ] = useState(podcasts)

  useEffect(() => {
    if (!podcasts || podcasts.length === 0) return
    setFilteredPodcasts(
      podcasts.filter(podcast => {
        return (
          podcast.title.toLowerCase().includes(filter.toLowerCase()) ||
          podcast.artist.toLowerCase().includes(filter.toLowerCase())
        )
      })
    )
  }, [filter, podcasts])

  return (
    <>
      <Row className="justify-content-md-end">
        <Col md={4} className='d-flex align-items-center'>
          <Badge className="mx-3">{filteredPodcasts.length}</Badge>
          <Form.Control type='text' onChange={({target}) => setFilter(target.value)} />
        </Col>
      </Row>
      <Row className="mt-3">
        {filteredPodcasts.map(podcast => 
          <Col lg={3} md={4} sm={6} key={podcast.id}>
            <PodcastItem podcast={podcast} />
          </Col>  
        )}
      </Row>
    </>
  )
}

export default HomePage