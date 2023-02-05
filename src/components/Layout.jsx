import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Outlet, useParams } from "react-router-dom"
import { PodcastContext } from "../context/PodcastContext"
import Header from "./Header"
import PodcastDetail from "./PodcastDetail"

const Layout = () => {

  const { podcastId } = useParams()

  const { podcasts } = useContext(PodcastContext)
  
  const podcast = podcasts?.find(podcast => podcast.id === podcastId)

  if (!podcast) return (
    <Container>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </Container>
  )

  return (
    <Container>
      <Header />
      <Container>
        <main>
          <Row>
            <Col lg={3} md={5}>
              <PodcastDetail podcast={podcast} />
            </Col>
            <Col lg={9} md={7}>
              <Outlet />
            </Col>
          </Row>
        </main>
      </Container>
    </Container>
  )

}

export default Layout