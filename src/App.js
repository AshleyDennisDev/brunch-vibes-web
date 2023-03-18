import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./scenes/LoginPage/Login";
import SignUp from "./scenes/Signup";
import Welcome from "./scenes/Welcome";
import PartyVibe from "./components/PartyVibe";
import ChillVibe from "./components/ChillVibe";
import ChicVibe from "./components/ChicVibe";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route
            path="/login"
            element={<Login setUser={setUser} user={user} />}
          />
          <Route path="/signup" element={<SignUp setUser={setUser} />}></Route>
          <Route
            path="/"
            element={
              user ? <Welcome user={user} /> : <Login setUser={setUser} />
            }
          />
          <Route
            path="/party"
            element={<PartyVibe user={user}/>}
          />
            <Route
            path="/chill"
            element={<ChillVibe user={user}/>}
          />          
          <Route
          path="/chic"
          element={<ChicVibe user={user}/>}
        />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
