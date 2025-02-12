import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Credentials: {
        isLoggedIn: true,
        isResister: true,
        userName: "",
        Password: "",
        fullname: "",
    }
}

const loginSlice = createSlice({
    name: "credentials",
    initialState,
    reducers: {
        login: (state,action) => {
            console.log(action.payload.email);
            state.Credentials.isLoggedIn=true;
            state.Credentials.userName=action.payload.email;
            state.Credentials.Password=action.payload.password;
            state.Credentials.fullname=action.payload.email;
            
         },
         logOut:(state,action)=>{
            state.Credentials.isLoggedIn=false
            state.Credentials.userName=''
            state.Credentials.Password=''
            state.Credentials.fullname=''
         },
        Resister: () => { }
    }
})

export default loginSlice.reducer;
export const {login,Resister,logOut} = loginSlice.actions;