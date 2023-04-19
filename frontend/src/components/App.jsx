import { createContext, useEffect, useState } from "react";
import "./App.css";
// import { SignUp } from "./components/SignUp";
// import { LogIn } from "./components/LogIn"; SC 4/18/2023 4:17 PM errors out
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
      <h1>Howdy! {user && user.name}</h1>
      <NavBar />

      <UserContext.Provider value={{user, setUser}} >
        <Outlet />
      </UserContext.Provider>

    </div>
  );
}

export default App;