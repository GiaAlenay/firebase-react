import { Routes,Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Protected } from "./components/Protected";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
     <AuthProvider>
     <Routes>
      
        <Route path='/' element={<Protected><Home/></Protected>}/>
      
      <Route path ='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;

