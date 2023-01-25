import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

export const Register=()=>{
    const [user,setUser]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const {register}=useAuth()

    const handleonChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {            
            await register(user.email ,user.password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input  onChange={handleonChange} type="email" name="email" placeholder="youremail@company.ltd"/>

            <label htmlFor='password'>Password:</label>
            <input  onChange={handleonChange} type="password" name="password" id="password" />

            <button>Register</button>
        </form>
    )
}