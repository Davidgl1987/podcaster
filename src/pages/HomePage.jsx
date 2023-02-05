import { useContext } from "react"
import { PodcastContext } from "../context/PodcastContext"

const HomePage = () => {

  const { podcasts } = useContext(PodcastContext)

  return (
    <>
      <h3>Home!</h3>
      <pre>{JSON.stringify(podcasts, null, 2)}</pre>
    </>
  )
}

export default HomePage