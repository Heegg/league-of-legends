import React from 'react'
import ChampionsCard from './ChampionsCard'
import './ChampionsList.css'


const ChampionsList = ({ champions }) => {

  const championsCard = champions.map((champion) => {
    return <ChampionsCard 
              key={champion.id} 
              champion={champion} 
/>})

  return (
    <div className="champions-list">
      <h5 className='instruction'>Click ⭐️ to add champions to My Champions list!</h5>
      {championsCard}
    </div>
  )
}

export default ChampionsList
