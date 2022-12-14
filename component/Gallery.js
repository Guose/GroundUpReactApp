import React, {useState, useEffect} from 'react'
import {apiKey} from '../apiKey'

function Gallery() {

    const [galleryResults, setGalleryResults] = useState([])

    

    useEffect(() => {
      async function fetchApiData() {
        const headers = {
          "Authorization": apiKey 
        }
        const apiResponse = await fetch('https://api.pexels.com/v1/search?query=model', { headers })
        const apiResponseJSON = await apiResponse.json()
        const photos = apiResponseJSON.photos
        console.log(photos)
        setGalleryResults([...photos])
      }
      fetchApiData()
    }, [])

    const galleryResultsJSX = galleryResults.map(post => {
      return <li key={post.id} className='gallery-results'>
        <div>Photographer: {post.photographer_url}</div>
        <div>Photographer URL: <a target="_blank" href={post.photographer_url}>Visit Photographer Site</a></div>
        <div>Description: {post.alt}</div>
        <div><img src={post.src.portrait}/></div>
      </li>
    })

  return <>
    <h1>Gallery</h1>
    <ul className='gallery-list'> {galleryResultsJSX} </ul>
    
  </>
}

export default Gallery