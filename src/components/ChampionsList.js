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
    <div>
      ChampionsList
      <h1>All Champions</h1>
      {championsCard}
    </div>
  )
}

export default ChampionsList
