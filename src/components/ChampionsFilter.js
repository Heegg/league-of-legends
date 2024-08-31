import React from 'react'
import './ChampionsFilter.css'

const ChampionsFilter = ({ handleSearch }) => {
  return (
    <div className='filter'>
      <input 
        type='text'        
        id='champion-search'
        placeholder='Type champion name'
        onChange={e => handleSearch(e.target.value)}
        />
    </div>
  )
}

export default ChampionsFilter
