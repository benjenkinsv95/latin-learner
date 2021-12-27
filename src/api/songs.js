import axios from 'axios'
import apiUrl from '../apiConfig'

export const getSongs = () => {
  return axios.get(apiUrl + '/songs')
}

export const getSongById = (id) => {
  return axios.get(apiUrl + '/songs/' + id)
}
