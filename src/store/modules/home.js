import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction=createAsyncThunk("fetchdata", (payload,{dispatch})=>{
  getHomeGoodPriceData().then(res => {
    console.log(res,1)
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    console.log(res,2)
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    console.log(res,3)
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    console.log(res,4)
    dispatch(changeRecommendInfoAction(res))
  })
  getHomeLongforData().then(res => {
    console.log(res,5)
    dispatch(changeLongforInfoAction(res))
  })
  getHomePlusData().then(res => {
    console.log(res,6)
    dispatch(changePlusInfoAction(res))
  })
 

})
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    /*[fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }*/
  }
 
})
export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions


export default homeSlice.reducer
