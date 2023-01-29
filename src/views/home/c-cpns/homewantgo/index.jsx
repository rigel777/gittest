import Srcollview from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import React, { memo } from 'react'
import { WantgoWappar } from './style'

const Homewantgo = memo((props) => {
    const {infoData}=props
    
  return (
 <WantgoWappar>
     
      <div className='longfor-list'>
        <Srcollview>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city}/>
            })
          }
        </Srcollview>
      </div>
 </WantgoWappar>
  )
})



export default Homewantgo