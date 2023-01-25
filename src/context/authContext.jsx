import {  createContext ,useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword ,
        onAuthStateChanged,
        signOut,
        signInWithEmailAndPassword} from "firebase/auth";

export const authContext=createContext();

export const useAuth=()=>{
    const context=useContext(authContext)
    if(!context) throw new Error('There is no Provider')
    return context
}

export const AuthProvider=({children})=>{
    const [user, setUser]=useState(null)
    const [loading , setLoading]=useState(true)
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const login=(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=async()=>{
        await signOut(auth)
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)

        })
        
    },[])
    return <authContext.Provider value={{signup , login ,user,logout,loading}}>{children}</authContext.Provider>
}

