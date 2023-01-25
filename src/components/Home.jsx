import { useAuth } from "../context/authContext"
export const Home=()=>{
    const {user, logout,loading}=useAuth()

    
    const handleLogOut=async()=>{
        try {
            await logout()
            
        } catch (error) {
            console.log(error)
        }
       
    }
    if(loading) return <h1>Loading..</h1>
    
    return(
        <div className="w-full  max-w-xs m-auto">
            <div className="bg-white rounded shadow-md px-8 pt-6 pb-8">
            <h1 className="text-xl mb-4">
                Wellcome {user.email}
            </h1>
            <div className="flex items-center justify-center">
            <button onClick={handleLogOut} className='bg-gray-200 rounded hover:bg-gray-300 py-2 px-3'>
                Logout
            </button>
            </div>
            </div>
        </div>
    )
}