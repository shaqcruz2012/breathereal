import { useEffect, useState, useContext } from "react";
import { logIn, signUp } from "./utilities";
import { getLocation } from "./utilities";
import { UserContext } from "./App.jsx";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  

  //   useEffect(()=> {
  //     console.log(name, email, password)
  //   }, [name, email, password])

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const {state, city} = await getLocation();
        const signUpResponse = await signUp(name, email, password, state, city)
        const signInResponse = await logIn(email, password, setUser);
        navigate('/feed/');
      }}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>Sign Up</h3>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="signUp" />
    </form>
  );
};