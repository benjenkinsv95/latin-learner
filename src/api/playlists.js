import axios from 'axios'
import apiUrl from '../apiConfig'

export const getPlaylists = () => {
  return axios.get(apiUrl + '/playlists')
}

export const getPlaylistById = id => {
  return axios.get(apiUrl + '/playlists/' + id)
}
