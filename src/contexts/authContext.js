import React, {createContext, useReducer} from "react";
import { SignInReducer } from "../reducers/authReducers";

export const SignInContext = createContext()

export const SignInContextProvider = (props) =>{ //전달할 하위값 처리 (로그인 시 토큰값 숨기기)

    const[signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
        userToken:null,
    })

        return(
            <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>
                {props.children}
            </SignInContext.Provider>
        )

}
