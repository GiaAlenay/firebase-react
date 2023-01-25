import {  createContext ,useContext } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authContext=createContext();

export const useAuth=()=>{
    const context=useContext(authContext)
    if(!context) throw new Error('There is no Provider')
    return context
}

export const AuthProvider=({children})=>{
    const register=(email , password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }
    return <authContext.Provider value={{register}}>{children}</authContext.Provider>
}