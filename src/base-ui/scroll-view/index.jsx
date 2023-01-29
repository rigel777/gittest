
import React, { memo,useState,useEffect, useRef } from 'react'
import { ScrollStyle } from './style'

const Srcollview = memo((props) => {
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const scrollContentRef = useRef()
    const totalDistanceRef = useRef()
    useEffect(()=>{
        
        const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
        
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current=totalDistance
        
        setShowRight(totalDistance >= 0)

    },[props.children])
    

    function controlClickHandle(isRight){
      
        const newIndex = isRight ? posIndex + 1: posIndex - 1
        const newEl = scrollContentRef.current.children[newIndex]
        
    const newOffsetLeft = newEl.offsetLeft

  
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
  
debugger
    setPosIndex(newIndex)
     // 是否继续显示右侧的按钮
     setShowRight(totalDistanceRef.current > newOffsetLeft)
     setShowLeft(newOffsetLeft > 0)

    }


  return (
    <ScrollStyle>
          {showLeft && (<div className='control left' onClick={e => controlClickHandle(false)}>
          左边
        </div>)}
        {showRight && (<div className='control right' onClick={e => controlClickHandle(true)}>
          右边
        </div>)}
         <div className='scroll'>
        <div className='scroll-content'  ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollStyle>
  )
})



export default Srcollview