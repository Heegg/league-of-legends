import React from 'react'
import './Header.css'
import slogan from '../logos/slogan.png'

const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={slogan} className='slogan' alt=''/>
    </div>
  )
}

export default Header
