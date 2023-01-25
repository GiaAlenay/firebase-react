import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
// import { Alert } from "./Alert";
export function Login() {
  const { signup  } = useAuth();

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
      await signup (user.email, user.password);
        navigate("/");
    } catch (error) {
        console.log(error)
      setError(error.message);
    }
  };

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
          Register
        </button>
      </form>
      <p  >
        Already have an Account?
        <Link to="/login"  >
          Login
        </Link>
      </p>
    </div>
  );
}
