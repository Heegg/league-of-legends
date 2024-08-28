import React from 'react'
import { useState } from 'react'
import DWGInfos from './DWGInfos'
import DWGCard from './DWGCard'
import './DWGSkins.css'

import logoDWPurple from '../logos/logoDWPurple.png'
import logoDWGold from '../logos/logoDWGold.png'

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
        <b><h1>Damwon Gaming 2020 Worlds Skins</h1></b>
      <hr/>
      <div className='DWGCardLists'>
        {DWGInfosCard}
      </div>
    </div>
  )
}

export default DWGSkins
