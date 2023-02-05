import { createContext, useEffect, useState } from "react";
import { fetchEpisodes, fetchPodcasts } from "../services/api";

export const PodcastContext = createContext()

export const PodcastContextProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [podcasts, setPodcasts] = useState([])

  const getPodcasts = async () => {
    try {
      setLoading(true)
      const podcastsList = await fetchPodcasts()
      setPodcasts(podcastsList)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const getPodcastEpisodes = async (podcastId) => {
    let episodes
    try {
      setLoading(true)
      episodes = await fetchEpisodes(podcastId)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
    return episodes
  }

  useEffect(() => {
    getPodcasts()
  }, [])

  return (
    <PodcastContext.Provider value={{
      loading, podcasts, getPodcastEpisodes
    }}>
      {children}
    </PodcastContext.Provider>
  )

}