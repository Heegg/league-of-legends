import React from 'react'
import ChampionsCard from './ChampionsCard'

const MyChampions = ({ champions, setChampions }) => {

  const favoriteChampions = champions.filter((champion) => (champion.favorite))

  const handleFavoriteChampion = (updatedChampion) =>{
    const updatedChampionArray = champions.map((champion) => {
      if(champion.id === updatedChampion.id){
        return updatedChampion
      } else {
        return champion
      }
    })
    setChampions(updatedChampionArray)
  }

  const favoriteChampionsCard = favoriteChampions.map((champion) => (
      <ChampionsCard 
          key={champion.id} 
          champion={champion} 
          onFavoriteChampion={handleFavoriteChampion}/>
  ))

  return (
    <div className='favoriteContainer'>
          {favoriteChampionsCard}
    </div>
  )
}

export default MyChampions
