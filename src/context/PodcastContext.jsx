import { createContext, useEffect, useMemo, useState } from "react";
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

  const value = useMemo(() => {
    return { loading, podcasts, getPodcastEpisodes }
  }, [loading, podcasts])

  return (
    <PodcastContext.Provider value={value}>
      {children}
    </PodcastContext.Provider>
  )

}