import { useState } from 'react'
import './DWGCard.css'

const DWGCard = ({ DWGInfo }) => {

  const [showInfoLogo, setShowInfoLogo] = useState(true)

  const toggleCardLogo = () => {
    setShowInfoLogo(showInfoLogo => !showInfoLogo)
  }

const Front = ({ DWGInfo }) => {
    return (
      <div>
        <img src={DWGInfo.backpng} alt={`${DWGInfo.playerName} back`} className='DWG-back-img'/>
        <h2>{DWGInfo.playerName}</h2>
      </div>
    )
  }
  
  const Back = ({ DWGInfo }) => {
    return (
      <div>
        <h4><b>{DWGInfo.playerName}</b></h4>
        <p>{DWGInfo.lane}</p>
        <img src={DWGInfo.frontpng} alt={`${DWGInfo.backname} front`} className='DWG-front-img'/>
        <h5>{DWGInfo.backname}</h5>
      </div>
    )
  }

return (
    <div onClick={toggleCardLogo} className='DWG-card'>
      {showInfoLogo ? <Front DWGInfo={DWGInfo}/> : <Back DWGInfo={DWGInfo}/>}
    </div>
  )
}

export default DWGCard
