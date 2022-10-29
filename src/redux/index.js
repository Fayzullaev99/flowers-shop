import { configureStore } from '@reduxjs/toolkit'
import favorite from './likeSlice/'

const store = configureStore({
  reducer: {
    favorite
  }
})
export default store