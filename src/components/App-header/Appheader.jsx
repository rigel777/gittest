import React from 'react'
import Headerleft from './cpns/heade-left/Headerleft'
import Headercenter from './cpns/header-center/Headercenter'
import Headerright from './cpns/header-right/Headerright'
import {HeaderWapper} from "./style"



function Appheader() {
  return (
    <HeaderWapper>
      <Headerleft></Headerleft>
      <Headercenter></Headercenter>
      <Headerright></Headerright>
   
      </HeaderWapper>
    
    
    
  )
}

export default Appheader