import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
// import { Alert } from "./Alert";
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
    await loginWithGoogle()
    navigate("/");
  }

  return (
    <div  >
      {error && (<p>{error}</p>)}

      <form
        onSubmit={handleSubmit}
         
      >
        <div className="mb-4">
          <label
            htmlFor="email"
             
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
             
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
             
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
             
            placeholder="*************"
          />
        </div>

        <button  >
          Login
        </button>
      </form>

      <button onClick={handlegoogleSignIn}>
        Login with Google
      </button>
      <p  >
        Do not have an Account?
        <Link to="/register"  >
          Register
        </Link>
      </p>
    </div>
  );
}
