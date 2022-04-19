import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";
import { Box, TextField } from "@mui/material";
import Hero from "../components/Hero";
import PartyVibe from "../components/PartyVibe";
import ChillVibe from "../components/ChillVibe";
import ChicVibe from "../components/ChicVibe";

export default function Login({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  useEffect(() => {
    const localUser = localStorage.getItem("displayName");
    console.log("LocalUser from LS", localUser);

    if (localUser) {
      setUser({ ...user, displayName: localUser });
    } 
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch(alert);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("displayName", result.user.displayName);
        localStorage.setItem("uid", result.user.uid);

        console.log("this is my result", result.user.displayName);
        navigate("/");
      })
      .catch(alert);
  };

  return (
    <>
    <Hero/>
    <PartyVibe></PartyVibe>
    <ChillVibe></ChillVibe>
    <ChicVibe></ChicVibe>
    <Box component="form" className="login" onSubmit={handleFormSubmit}>
      <h2>Want to Add to Vibes?</h2>
      <h3>Login</h3>
       
        <TextField
          label="Email"
            id="emailField"
            name="location"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        <br />
        <TextField
            id="passwordField"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        <br />
        <button className="loginBtn">Login</button>
        <br/>
      <button
        onClick={handleGoogleLogin}
        className="loginBtn"
      >
        Login with Google
      </button>
      <p>
        {" "}
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </Box>
    </>
  );
}
