import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice ({
    name:'users',
    initialState:{
        loading:true,
        articles:{
            items:[]
        }
    },
    reducers:{
    },
})

export default usersSlice.reducer;
