import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice';
import bonusReducer from './BonusSlice'
import { todoReducer } from './TodoSlice';
import { adminApi } from '../api/AdminSlice';
export const store = configureStore({
    reducer : {
        counter : counterReducer,
        bonus : bonusReducer,
        todo : todoReducer,
        [adminApi.reducerPath] : adminApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(adminApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

