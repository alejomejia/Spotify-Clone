import spotifyAPI from './'

export const getAllPlaylists = async () =>
  await spotifyAPI.getUserPlaylists().then((data: any) => data.body.items)
