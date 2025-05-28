import { useEffect, useState } from 'react'

const API_KEY = '5c2ace20' // tu API key
const API_POSTER_ENDPOINT = 'http://img.omdbapi.com/'

const usePosterPelicula = (imdbID) => {
  const [posterUrl, setPosterUrl] = useState(null)

  useEffect(() => {
    if (!imdbID) {
      setPosterUrl(null)
      return
    }
    // Construye la URL del póster
    const url = `${API_POSTER_ENDPOINT}?apikey=${API_KEY}&${imdbID}`
    setPosterUrl(url)
  }, [imdbID])

  return posterUrl
}

export default usePosterPelicula
