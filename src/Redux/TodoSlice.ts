import { createAction, createReducer } from '@reduxjs/toolkit';

export interface Tasks {
    id : number
    task : string,
    completed :  boolean
}



export const addTasks = createAction<Tasks>("todo/addTask");
export const toggleTasks = createAction<Tasks>("todo/ToggleTask")
export const todoReducer = createReducer([] as Tasks[], builder => {
    builder
    .addCase(addTasks, (state, action) => {
        const todo = action.payload;
        return [...state, todo]
    })
    .addCase(toggleTasks, (state, action) => {
     
     const todo = state[action.payload];
     todo.completed = !todo.completed
    })
})

