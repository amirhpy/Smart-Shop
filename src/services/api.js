import axios from 'axios'

const BASE_URL = 'https://smartwatch-a853a-default-rtdb.firebaseio.com'

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/smart-data.json`)
    return Object.entries(response.data)
}

export { getProducts }