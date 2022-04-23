const API_URL = 'https://rickandmortyapi.com/api/character'

const getData = async (id) => {
    try {
        const parsedApiUrl = id ? `${API_URL}/${id}` : API_URL
        const response = await fetch(parsedApiUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Fetch Error:', error)
    }
}

export default getData
