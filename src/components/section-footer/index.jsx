
import React, { memo } from 'react'
import { FooterWapper } from './style'

const Sectionfooter = memo((props) => {
    const {name}=props
    
  return (
    <FooterWapper>
        <div>显示更多{name}房源</div>
    </FooterWapper>
  )
})



export default Sectionfooter