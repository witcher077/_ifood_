import {configureStore} from "@reduxjs/toolkit";

import  cartSlices  from "../Features/Cart";
import  themeSlice  from "../Features/Theme";
import  loginSlice  from "../Features/Login";

export const store =configureStore({
    reducer: {
        cart: cartSlices,
        Themes: themeSlice,
        Login: loginSlice,
      },
})