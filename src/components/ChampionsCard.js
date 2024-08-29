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

const ChampionsCard = ({ champion }) => {

    const [ showInfoChampion, setShowInfoChampion ] = useState(true)

  const toggleCardChampion = () => {
    setShowInfoChampion(showInfoChampion => !showInfoChampion)
  }

  return (
    <div className='champions-card'>
      <div onClick={toggleCardChampion}>
        {showInfoChampion ? <Front icon={champion.icon} name={champion.name} /> : 
                            <Back champion={champion} />} 
      </div>
    </div>
  )
}

export default ChampionsCard
