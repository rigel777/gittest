
import Srcollview from '@/base-ui/scroll-view'
import classNames from 'classnames'
import React, { memo } from 'react'
import { useState } from 'react'
import { Sectiontabs } from './style'


const Sectiontab = memo((props) => {
    
    const {tabNames=[],tabClick}=props
    
    const [currenIndex,setCurrentIndex]=useState(0)
    function clickitem(index,item){
      setCurrentIndex(index)
      tabClick(index, item)
    }

    
  return (
    <Sectiontabs>
      <Srcollview>
        {tabNames.map((item,index)=>{
           return(
            <div 
            key={index}
            className={classNames("item",{active:index===currenIndex})}
            onClick={e=>clickitem(index,item)}
            >{item}</div>
           )
        })}
      </Srcollview> 
   </Sectiontabs>
  )
})



export default Sectiontab