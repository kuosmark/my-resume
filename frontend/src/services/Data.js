import axios from 'axios'
const url = 'http://localhost:3001/data'

const getData = async () => {
  const response = await axios.get(url)
  return response.data
}

export default { getData }
