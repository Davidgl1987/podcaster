export const PodcastModel = (podcastApi) => {
  return {
    id: podcastApi.id.attributes['im:id'],
    name: podcastApi['im:name'].label,
    image: podcastApi['im:image'][2].label,
    summary: podcastApi.summary.label,
    title: podcastApi.title.label,
    artist: podcastApi['im:artist'].label,
  }
}
