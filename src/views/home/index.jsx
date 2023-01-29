import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo} from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { isEmptyO } from '../../utils/is-empty-object'
import HomeBanner from './c-cpns'
import HomeSectionV2 from './c-cpns/home-section-v2'
import Homewantgo from './c-cpns/homewantgo'
import { HomeWrapper } from './style'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
/**派发异步的事件: 发送网络请求 */
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchHomeDataAction())
},[dispatch])


  return (
    <div>
    <HomeBanner></HomeBanner>
    <HomeWrapper>
    { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
    { isEmptyO(longforInfo) && <Homewantgo  infoData={longforInfo}></Homewantgo>}
     
   </HomeWrapper>
   </div>
  )
})

export default Home
