import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";

export function Login() {
  const { login ,loginWithGoogle } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login (user.email, user.password);
        navigate("/");
    } catch (error) {
        console.log(error)
      setError(error.message);
    }
  };

  const handlegoogleSignIn=async(e)=>{
    try {
        await loginWithGoogle()
        navigate("/");
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="w-full max-w-xs m-auto" >
       {error && <Alert message={error}/>}

      <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
         
      >
        <div className="mb-4">
          <label
            htmlFor="email"
             className="block text-gray-600 text-sm font-fold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-600
                        leading-tight focus:outline-none focus:shadow-outline'
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-fold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-600
            leading-tight focus:outline-none focus:shadow-outline'
            placeholder="*************"
          />
        </div>

        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </form>

      <button onClick={handlegoogleSignIn} className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'>
        Login with Google
      </button>
      <div className="w-full text-center" >
        <span className="w-full text-center text-gray-500 ">
            Do not have an Account?
        </span>
        <br></br>
        <Link to="/register" className="text-blue-700"  >
          Register
        </Link>
      </div>
    </div>
  );
}
