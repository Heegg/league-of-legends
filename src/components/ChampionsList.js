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
      <h3 className='instruction'>Click ⭐️ to add champions to My Champions list!</h3>
      {championsCard}
    </div>
  )
}

export default ChampionsList
