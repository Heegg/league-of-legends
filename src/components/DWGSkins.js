import React from 'react'
import { useState } from 'react'
import DWGInfos from './DWGInfos'
import DWGCard from './DWGCard'

import logoDWPurple from '../logos/logoDWPurple.png'
import logoDWGold from '../logos/logoDWGold.png'
import './DWGSkins.css'


const DWGSkins = () => {

  const [flipDWLogo, setFlipDWLofo] = useState(true)
  
  const handleDWLogo = () => {
    setFlipDWLofo(flipDWLogo => !flipDWLogo)
  }

  const DWGInfosCard = DWGInfos.map((DWGInfo) => {
    return <DWGCard 
            key={DWGInfo.id}
            DWGInfo={DWGInfo}
            />
  })

  return (
    <div className='damwonSkins'>
      <p onClick={handleDWLogo}>
        {flipDWLogo ? <img src={logoDWPurple} className='DWPurpleLogo' alt=''/> : 
        <img src={logoDWGold} className='DWGoldLogo' alt=''/>}
      </p>  
      <hr/>
        <b><h3>Damwon Gaming Worlds Skins</h3></b>
        <p>Click the card to see the skins</p>
      <hr/>
      <div className='DWGCardLists'>
        {DWGInfosCard}
      </div>
    </div>
  )
}

export default DWGSkins
