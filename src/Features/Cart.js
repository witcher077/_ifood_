import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { redirect } from "react-router";

const initialState = {
    cartItems: [
        //     { id: 1, productName: "Chicken", productPrice: "200", productImage: "img_url", quantity: 1 },
        //   { id: 2, productName: "Fish", productPrice: "300", productImage: "img_url", quantity: 2 },
    ],
};


export const cartSlices = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // Check if the product already exists in the cart
          
                const isPresent = state.cartItems.find((item) => item.id === action.payload.id);

                console.log(isPresent, state.cartItems);

                if (isPresent) {
                    // If product is present, increase quantity
                    state.cartItems = state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
                            : item
                    );
                } else {
                    // If product is not present, add it to the cart with quantity 1
                    state.cartItems.push({ ...action.payload, quantity: 1 });
                }
        
        },


        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlices.actions;

// Export reducer
export default cartSlices.reducer;