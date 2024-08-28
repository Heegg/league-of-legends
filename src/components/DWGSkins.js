import React from 'react'
import DWGInfos from './DWGInfos'
import DWGCard from './DWGCard'

const DWGSkins = () => {

  const DWGInfosCard = DWGInfos.map((DWGInfo) => {
    return <DWGCard 
            key={DWGInfo.id}
            DWGInfo={DWGInfo}
            />
  })

  return (
    <div>
      <hr/>
        <b><h1>Damwon Gaming 2020 Worlds Skins</h1></b>
      <hr/>
      <div>
        {DWGInfosCard}
      </div>
    </div>
  )
}

export default DWGSkins
