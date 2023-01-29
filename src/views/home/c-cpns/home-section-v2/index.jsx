import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

import { SectionV2Wrapper } from './style'
import Sectiontab from '@/components/section-tabs'
import Sectionfooter from '@/components/section-footer'



const HomeSectionV2 = memo((props) => {
  /** 从props获取数据 */
  const { infoData } = props
 
  const initialName = Object.keys(infoData.dest_list)[0]
  
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
   /** 事件处理函数 */
   const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  /** 定义内部的state */
  
  return (
    <SectionV2Wrapper>

         <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
         <Sectiontab tabNames={tabNames} tabClick={tabClickHandle}></Sectiontab>

         <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%"></SectionRooms>
        <Sectionfooter name={name}></Sectionfooter>
      
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2