import React from 'react'
import './ChampionsFilter.css'

const ChampionsFilter = ({ handleSearch }) => {
  return (
    <div className='filter'>
      <input 
        type='text'
        placeholder='Type champion name'
        onChange={e => handleSearch(e.target.value)}
        />
    </div>
  )
}

export default ChampionsFilter
