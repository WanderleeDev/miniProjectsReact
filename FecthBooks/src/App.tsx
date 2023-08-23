import { SearchBar } from './components/SearchBar'
import { useState } from 'react'
import { GalleryCard } from './components/GalleryCard/GalleryCard'

function App() {
  const [param, setParam] = useState('')

  const paramHandler = (newParam: string) => {
    setParam( newParam )
  }

  return (
    <>
      <SearchBar searchServices={{paramHandler, param}}/>
      <GalleryCard paramSearch={param}/>
    </>
  )
}

export default App
