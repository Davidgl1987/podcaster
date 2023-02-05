import { Container } from "react-bootstrap"
import { Outlet, useParams } from "react-router-dom"
import Header from "./Header"

const Layout = () => {

  return (
    <Container>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </Container>
  )

}

export default Layout