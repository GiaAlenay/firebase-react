import { useAuth } from "../context/authContext"
export const Home=()=>{
    const auto=useAuth()
    console.log(auto)
    return(
        <div>
            Home
        </div>
    )
}