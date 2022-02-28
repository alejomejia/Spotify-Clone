import spotifyAPI from 'utils/lib/spotify'

export const getPlaylist = async (playlistId: string) =>
  await spotifyAPI.getPlaylist(playlistId).then((res: any) => res.body)

export const getAllPlaylists = async () =>
  await spotifyAPI.getUserPlaylists().then((res: any) => res.body.items)
