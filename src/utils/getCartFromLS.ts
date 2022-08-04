import { ICartItem } from "../types/ICartItem"

export const getCartFromLS = (): ICartItem[] => {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
}