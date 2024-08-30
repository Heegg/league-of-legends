import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/UOxkGD8qRB4" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Home
