import React, {createContext, useReducer} from "react";
import { SignInReducer } from "../reducers/authReducers";

export const SignInContext = createContext()

export const SignInContextProvider = (props) =>{

    const[signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
        userToken:null,
    })

        return(
            <SignInContextProvider value = {{signedIn,dispatchSignedIn}}>
                {props.children}
            </SignInContextProvider>
        )

}
