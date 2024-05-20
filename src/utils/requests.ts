import axios from 'axios'

export const getTimeZones = async () => {
  const response = await axios.get(process.env.API_URL!, { timeout: 7000 })
  return response.data
}
