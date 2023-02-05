export const EpisodeModel = (episodeApi) => {
  return {
    id: episodeApi.trackId,
    name: episodeApi.trackName,
    description: episodeApi.description,
    url: episodeApi.episodeUrl,
    date: episodeApi.releaseDate,
    duration: episodeApi.trackTimeMillis,
  }
}
