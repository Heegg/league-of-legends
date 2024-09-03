import React from 'react'
import './Home.css'
import myVideo from '../logos/lolVideo.mp4'

const Home = () => {
  return (
    <div className='home'>
      <video controls>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Home
