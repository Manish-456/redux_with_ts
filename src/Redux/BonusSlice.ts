import { createSlice, createAction } from '@reduxjs/toolkit';

export interface BonusState {
    bonus : number
};

const autoIncrement = createAction<number>('counter/incrementByAmount');
const initialState : BonusState = {
    bonus : 0
};

export const bonusSlice = createSlice({
    name : "bonus",
    initialState , 
    reducers : {
        increment : (state) => {state.bonus += 5}
    },
    extraReducers : builder => {
        builder
        .addCase(autoIncrement, (state, action) => {
          if(action.payload > 100){
            state.bonus += 15
          }
        })
    }
})
export const {increment} = bonusSlice.actions;
export default bonusSlice.reducer;
