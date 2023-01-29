import React from 'react'
import { HeaderleftWapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

function Headerleft() {
  return (
    <HeaderleftWapper>
        <div className='logo'>
        <IconLogo/>
      </div>
    </HeaderleftWapper>
  )
}

export default Headerleft