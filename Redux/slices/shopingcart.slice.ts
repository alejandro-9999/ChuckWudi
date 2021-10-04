import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./products.slice";
import { RootState } from "../store";


export interface ProductCart extends Product{
    amount : number 
}



const initialState:ProductCart[] = [];


const shopingCartSlice = createSlice({
    name: 'shopingCart',
    initialState,
    reducers:{
        addProduct:(state,action: PayloadAction<Product>)=>{
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            if(productIndex !== -1 ){
                state[productIndex].amount+=1;
            }else{
                state.push({...action.payload,amount:1})
            } 
            
        },

        removeFromCard: (state,action: PayloadAction<number>) => {
            const productIndex = state.findIndex(product => product.id === action.payload);
            if(state[productIndex].amount>1){
                state[productIndex].amount -=1;
            }else{
                return state.filter(product => product.id !==  action.payload );
            }
        }
    } 
});


export const {addProduct,removeFromCard} = shopingCartSlice.actions;

export const getShopingCartSelector = (state: RootState) => state.shopingCart;

export default shopingCartSlice.reducer;