import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalAmountSummary: 0,
    summaryCart: [],
    typeShipping: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { title } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (itemIndex < 0) {
                state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
                alert(`Added ${title}`);


            } else {
                state.cart = state.cart.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, quantity: item.quantity + 1 };

                    }
                    return item;

                });
                alert(`Added more ${title}`);

            }
        },
        deleteItemFromCart: (state, action) => {
            const { id, title } = action.payload;

            const itemsCart = state?.cart?.filter(
                cartItem => cartItem.id !== id
            )
            state.cart = itemsCart;
            alert(`Removed ${title}`);

        },
        decreaseItemFromCart: (state, action) => {

            const { id, title } = action.payload;

            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[itemIndex].quantity > 1) {
                state.cart = state.cart.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
            } else {
                const itemsCart = state.cart.filter(
                    cart => cart.id !== id
                )
                state.cart = itemsCart;
                alert(`decrease ${title}`);
            }
        },
        clearCart(state, action) {
            state.cart = []
            alert('Cleared')

        },
        purchaseCart(state, action) {
            state.summaryCart = [...state.cart];
            console.log('summaryCart', state.summaryCart)
            state.cart = []

            alert('purchase success')

        },
        getTotals(state, action) {
            state.cartTotalAmount = state.cart.reduce((total, item) => {
                return (total + item.quantity * item.price + state.typeShipping);
            }, 0);

            state.cartTotalAmountSummary = state.summaryCart.reduce((total, item) => {
                return total + item.quantity * item.price + state.typeShipping;
            }, 0);

            state.cartTotalQuantity = state.cart.reduce((total, item) => {
                return total + item.quantity
            }, 0)
        },
        shipingType(state, action) {
            state.typeShipping = action.payload
        },
        endProcess(state, action) {
            state.cartTotalAmountSummary = []
            state.typeShipping = 0
        }

    }
})


export const selectCart = (state) => state.cart.cart



export const selectTotalCart = (state) => state.cart.cartTotalAmount
export const selectQuantityCart = (state) => state.cart.cartTotalQuantity
export const selectTotalCartSummary = (state) => state.cart.cartTotalAmountSummary
export const selectTypeShipping = (state) => state.cart.typeShipping
export const selectSummaryCart = (state) => state.cart.summaryCart

export const {
    addToCart,
    deleteItemFromCart,
    decreaseItemFromCart,
    clearCart,
    purchaseCart,
    getTotals,
    shipingType,
    endProcess
} = cartSlice.actions

export default cartSlice.reducer