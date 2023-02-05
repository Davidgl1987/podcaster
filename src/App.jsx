import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EpisodePage from './pages/EpisodePage'
import HomePage from './pages/HomePage'
import PodcastPage from './pages/PodcastPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="podcast/:podcastId" element={<PodcastPage />} />
          <Route path="podcast/:podcastId/episode/:episodeId" element={<EpisodePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
