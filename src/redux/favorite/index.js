import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('favorite') || '[]')
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    handlefavorite: (state,action)=>{
        if (state[action.payload.id]) {
          delete state[action.payload.id]
        }else{
          state[action.payload.id] = action.payload
        }
        localStorage.setItem('favorite',JSON.stringify(state))
    }
  }
})

export const { handlefavorite } = favoriteSlice.actions

export default favoriteSlice.reducer