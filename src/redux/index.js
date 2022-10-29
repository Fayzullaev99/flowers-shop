import { configureStore } from '@reduxjs/toolkit'
import favorite from './favorite'
import cart from './cart'
const store = configureStore({
  reducer: {
    favorite,
    cart
  }
})
export default store