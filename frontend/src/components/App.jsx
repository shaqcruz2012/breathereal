import { createContext, useEffect, useState } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn"; 
import { currUser, logOut } from "./utilities";
import { getToken } from "./CsrfToken";
import { Outlet } from "react-router-dom";
import NavBar  from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
import SingleColumn from "./Layouts/SingleColumn.jsx";

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
    <SingleColumn >
          <NavBar user = {user} setUser = {setUser}/>
          <UserContext.Provider value={{user, setUser}} >
            <Outlet />
          </UserContext.Provider>
    </SingleColumn>
  );
}

export default App;