import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { PodcastContextProvider } from './context/PodcastContext'
import EpisodePage from './pages/EpisodePage'
import HomePage from './pages/HomePage'
import PodcastPage from './pages/PodcastPage'

function App() {

  return (
    <BrowserRouter>
      <PodcastContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="podcast/:podcastId" element={<PodcastPage />} />
            <Route path="podcast/:podcastId/episode/:episodeId" element={<EpisodePage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </PodcastContextProvider>
    </BrowserRouter>
  )
}

export default App
