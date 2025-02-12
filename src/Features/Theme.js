import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Theme: "light",
}

const ThemeSlice = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            if (state.Theme === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem('theme',"dark")
            }
            else {
                document.documentElement.classList.remove("dark")
                localStorage.setItem('theme',"light")

            }
           state.Theme = state.Theme === "light" ? "dark" : "light";

            
        },
    }
})

export default ThemeSlice.reducer;
export const { changeTheme } = ThemeSlice.actions;