import axios from 'axios'
import apiUrl from '../apiConfig'

export const getSongs = () => {
  return axios.get(apiUrl + '/songs')
}
