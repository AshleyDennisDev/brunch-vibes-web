import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../ConnectAuth";
import { Box, Paper, TextField } from "@mui/material";
import "./signup.scss"

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
    <Box className="signupForm">
      <Paper
        sx={{ backgroundColor: "transparent" }}
        elevation={3}
        component="form"
        onSubmit={handleFormSubmit}
      >
        <div className="signupForm__wrapper">
          <h1>SignUp</h1>
          <div className="signupForm__wrapper__input">
            <span className="signupForm__wrapper__input--fields">
              <TextField
                className="signupForm__wrapper__input--field"
                label="Email"
                id="emailField"
                name="location"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>

            <span className="signupForm__wrapper__input--fields">
              <TextField
                className="signupForm__wrapper__input--field"
                id="passwordField"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </div>
          <div className="signupBtn__wrapper">
          <button className="signupBtn__wrapper--btn">SignUp</button>
          <button className="signupBtn__wrapper--btn" onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
          </div>
          <p>
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </Paper>
    </Box>
  );
}
