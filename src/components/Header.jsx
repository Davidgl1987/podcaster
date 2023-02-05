import { useContext } from "react"
import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { PodcastContext } from "../context/PodcastContext"
import LoadingSpinner from "./LoadingSpinner"

const Header = () => {

  const { loading } = useContext(PodcastContext)

  return (
    <Navbar sticky="top" className="border-bottom mb-3 bg-white">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-primary text-decoration-none">
            <h2>Podcaster</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {loading && <LoadingSpinner color="#0d6efd" />}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default Header