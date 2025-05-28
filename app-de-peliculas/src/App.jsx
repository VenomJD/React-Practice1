import './App.css'
import Pelicula from './components/pelicula.jsx'
import useInfoPeliculas from './services/useInfoPeliculas.js'
import { useState } from 'react'

function App () {
  const [titulo, setTitulo] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const { peliculas, loading, error } = useInfoPeliculas(busqueda)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBusqueda(titulo.trim())
  }

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='app-title'>App de Películas</h1>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Busca tu película'
            className='search-input'
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
          <button type='submit' className='search-button'>Buscar</button>
        </form>
      </header>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div>
        {peliculas && peliculas.length > 0 && peliculas.map(pelicula => (
          <Pelicula key={pelicula.imdbID} {...pelicula} />
        ))}
      </div>
    </div>
  )
}

export default App
