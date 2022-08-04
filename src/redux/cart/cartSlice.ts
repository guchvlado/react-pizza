import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from '../../types/ICartItem'
import { getCartFromLS } from "../../utils/getCartFromLS";

interface CartSliceState {
    items: ICartItem[]
}

const initialState: CartSliceState = {
    items: getCartFromLS()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const item = state.items.find(item => item.id === action.payload.id)
            if (item)
                item.quantity++
            else
                state.items.push(action.payload)
        },
        deleteCartItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        increaseItemQuantity: (state, action: PayloadAction<string>) => {
            const cartItem = state.items.find(item => item.id === action.payload)
            if (!cartItem) throw new Error('there is no such item in the cart')
            cartItem.quantity++
        },
        decreaseItemQuantity: (state, action: PayloadAction<string>) => {
            const cartItem = state.items.find(item => item.id === action.payload)
            if (!cartItem) throw new Error('there is no such item in the cart')
            if (cartItem.quantity > 1) {
                cartItem.quantity--
            } else {
                state.items = state.items.filter(item => item.id !== action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    addCartItem,
    clearCart,
    deleteCartItem,
    decreaseItemQuantity,
    increaseItemQuantity,
    removeItem
} = cartSlice.actions