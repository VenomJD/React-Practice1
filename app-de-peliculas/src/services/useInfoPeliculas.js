import { useEffect, useState } from 'react'

const API_SEARCH_ENDPOINT = 'http://www.omdbapi.com/?apikey=5c2ace20&s='
const API_DETAIL_ENDPOINT = 'http://www.omdbapi.com/?apikey=5c2ace20&i='

const useInfoPeliculas = (busqueda) => {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!busqueda) return
    setLoading(true)
    setError(null)
    fetch(API_SEARCH_ENDPOINT + encodeURIComponent(busqueda.trim()))
      .then(res => res.json())
      .then(async data => {
        if (data.Response === 'True') {
          // Fetch detalles para cada imdbID
          const detalles = await Promise.all(
            data.Search.map(peli =>
              fetch(API_DETAIL_ENDPOINT + peli.imdbID)
                .then(res => res.json())
            )
          )
          setPeliculas(detalles)
        } else {
          setPeliculas([])
          setError(data.Error || 'No se encontraron resultados')
        }
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setPeliculas([])
        setLoading(false)
      })
  }, [busqueda])

  return { peliculas, loading, error }
}

export default useInfoPeliculas
