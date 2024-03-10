import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  error:null,
  loading:false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Start: (state) => {
      state.loading =true
    },
    Success: (state,action) => {
      state.currentUser=action.payload;
      state.loading=false;
      state.error=null;
    },
    Failure: (state, action) => {
        state.loading=false;
        state.error=action.payload;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    
  
  },
})

// Action creators are generated for each case reducer function
export const { Start,Success,Failure,deleteUserSuccess } = userSlice.actions

export default userSlice.reducer