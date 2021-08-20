import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/rootSlice';


// Configure what we are storing in the store: <--- based on documentation
export const store = configureStore({
    reducer,
    devTools: true
});