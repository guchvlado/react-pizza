import { ICartItem } from "../types/ICartItem";

export function countOrder(items: ICartItem[]) {
    // return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    let totalPrice = 0;
    let totalQuantity = 0;
    items.forEach(item => {
        totalPrice += item.price * item.quantity
        totalQuantity += item.quantity
    })
    return {totalPrice, totalQuantity}
}