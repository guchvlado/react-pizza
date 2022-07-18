import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { fitlerSlice } from "./filter/filterSlice";

import { pizzaSlice } from "./pizza/pizzaSlice";

export const store = configureStore({
    reducer: {
        pizza: pizzaSlice.reducer,
        filter: fitlerSlice.reducer,
        cart: cartSlice.reducer
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;