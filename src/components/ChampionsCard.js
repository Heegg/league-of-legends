import React from 'react'
import { useState } from 'react'
import './ChampionsCard.css'

const Front = ({ icon, name }) => {
    return (
      <div>
        <img className="championCard-front-img" src={icon} alt={"champion name"}/>
        <h3>{name}</h3>
      </div>
    )
  }
  
const Back = ({ champion }) => {
      const tagsList = champion.tags.map(tag => {
      return <p key={tag}>[ {tag} ]</p>
          })
  
    return (
      <div>
        <img className="championCard-back-img" src={champion.icon} alt={"champion name"}/>
        <h3>{champion.name}</h3>
        <p>"{champion.title}"</p>
        <p className="taglist">{tagsList}</p>
        <p><b>Description:</b><br/>{champion.description}</p>
      </div>
    )
  }

const ChampionsCard = ({ champion, onFavoriteChampion }) => {

  const { id, favorite } = champion
  const [ showInfoChampion, setShowInfoChampion ] = useState(true)
  const [ isFavorite, setIsFavorite ] = useState(favorite)

  const toggleCardChampion = () => {
    setShowInfoChampion(showInfoChampion => !showInfoChampion)
  }

  const handleFavoriteChange = () => {
    setIsFavorite(isFavorite => !isFavorite)

    fetch('http://localhost:3000/champions/'+id, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({favorite: !favorite})
    })
      .then(window.location.reload())
      .then(onFavoriteChampion)
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div className='champions-card'>
      <div onClick={handleFavoriteChange} className='emoji-button'>
        {isFavorite ? (
           <button className="emoji-button like">⭐️</button>
        ) : (
          <button className="emoji-button unlike">⭐️</button>
        )}
      </div>  
      <div onClick={toggleCardChampion}>
        {showInfoChampion ? <Front icon={champion.icon} name={champion.name} /> : 
                            <Back champion={champion} />} 
      </div>
    </div>
  )
}

export default ChampionsCard
