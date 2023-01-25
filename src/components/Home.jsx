import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
export const Home=()=>{
    const {user, logout,loading}=useAuth()

    const navigate =useNavigate()
    const handleLogOut=async()=>{
        await logout()
        navigate('/login')
    }
    if(loading) return <h1>Loading..</h1>
    
    return(
        <div>
            <h1>
                Wellcome {user.email}
            </h1>
            <button onClick={handleLogOut}>
                Logout
            </button>
        </div>
    )
}