import { useState, useEffect } from 'react'
import './App.css'
import { Getfact } from './services/serviceFact'

export function App () {
  const [facts, setFacts] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [customText, setCustomText] = useState('')
  const [translatedFact, setTranslatedFact] = useState('')

  // Traer el fact del gato
  useEffect(() => {
    const fetchFact = async () => {
      const fact = await Getfact()
      setFacts(fact)
      setCustomText(fact ? fact.split(' ', 3).join(' ') : '')
    }
    fetchFact()
  }, [])

  // Actualizar imagen cuando cambia el texto
  useEffect(() => {
    if (!customText) return
    fetch(`https://cataas.com/cat/says/${encodeURIComponent(customText)}?fontSize=50&fontColor=red&json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        setImageUrl(url)
      })
  }, [customText])

  // Traducir el fact al español automáticamente
  useEffect(() => {
    if (!facts) return
    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(facts)}&langpair=en|es`)
      .then(res => res.json())
      .then(data => {
        if (data.responseData && data.responseData.translatedText) {
          setTranslatedFact(data.responseData.translatedText)
        } else {
          setTranslatedFact('Error al traducir')
          console.error('Respuesta de traducción:', data)
        }
      })
      .catch((err) => {
        setTranslatedFact('Error al traducir')
        console.error('Error en la petición:', err)
      })
  }, [facts])

  const handleClick = async () => {
    const newFact = await Getfact()
    setFacts(newFact)
    setCustomText(newFact ? newFact.split(' ', 3).join(' ') : '')
  }

  const handleInputChange = (e) => {
    setCustomText(e.target.value)
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      {facts && (
        <>
          <p><b>Inglés:</b> {facts}</p>
          <p><b>Español:</b> {translatedFact}</p>
        </>
      )}
      <p>Escribe algo para que aparesca en la imagen del gato</p>
      <input
        type='text'
        value={customText}
        onChange={handleInputChange}
        placeholder='Texto para la imagen'
      />
      {imageUrl && <img src={imageUrl} alt={`Imagen con texto: ${customText}`} />}
      <button onClick={handleClick}>Buscar Nueva informacion</button>
    </main>
  )
}
