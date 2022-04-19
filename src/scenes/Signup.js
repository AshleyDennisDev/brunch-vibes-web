import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";
import { Box, TextField } from "@mui/material";

export default function SignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
        navigate("/");
      })
      .catch(alert);
  };

  return (
    <Box component="form" className="signup" onSubmit={handleFormSubmit}>
      <h1>SignUp</h1>
        
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
          <br/>
          <button className="signupBtn">SignUp</button>
        <br/>
      <button
        onClick={handleGoogleLogin}
     className='signupBtn'
      >
        Sign in with Google
      </button>
      <p>
        {" "}
        Already a user? <Link to="/login">Login</Link>
      </p>
    </Box>
  );
}
