import { configureStore } from "@reduxjs/toolkit";
import categories from './slices/categories.slice';
import products from './slices/products.slice';
import { createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import shopingCart from './slices/shopingcart.slice'
import { useDispatch } from "react-redux";


const store = configureStore({
    reducer : {
        categories,
        products,
        shopingCart
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof  store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;