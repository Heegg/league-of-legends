import { useState } from 'react'

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
        <h1><b>{DWGInfo.playerName}</b></h1>
        <h3>{DWGInfo.lane}</h3>
        <img src={DWGInfo.frontpng} alt={`${DWGInfo.backname} front`} className='DWG-front-img'/>
        <h3>{DWGInfo.backname}</h3>
      </div>
    )
  }

const DWGCard = ({ DWGInfo }) => {

  const [showInfoLogo, setShowInfoLogo] = useState(true)

  const toggleCardLogo = () => {
    setShowInfoLogo(showInfoLogo => !showInfoLogo)
  }

return (
    <div onClick={toggleCardLogo} className='DWG-card'>
      {showInfoLogo ? <Front DWGInfo={DWGInfo}/> : <Back DWGInfo={DWGInfo}/>}
    </div>
  )
}

export default DWGCard
