import { createContext, useEffect, useState } from "react";
import "./App.css";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn"; 
import { currUser, logOut } from "./utilities";
import { getToken } from "./CsrfToken";
import { Outlet } from "react-router-dom";
import NavBar  from "./NavBar";



export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);

  getToken()

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);



  return (
    <div className="App">
      <button onClick={()=>logOut(setUser)}>LOG OUT</button>
      <h1>Howwdy! {user && user.name}</h1>
      <NavBar />

      <UserContext.Provider value={{user, setUser}} >
        <Outlet />
      </UserContext.Provider>

    </div>
  );
}

export default App;