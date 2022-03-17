import "./App.css";
import ChillVibe from "./components/ChillVibe";
import PartyVibe from "./components/PartyVibe";
import ChicVibe from "./components/ChicVibe";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./scenes/Login";
import SignUp from "./scenes/Signup";
import Welcome from "./scenes/Welcome";

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
              user ? (
                // ? <Welcome user={user} setUser={setUser}/>
                <Welcome user={user} />
              ) : (
                <Login setUser={setUser} />
              )
            }
          ></Route>
        </Routes>
        {/* <Hero></Hero>
        <PartyVibe></PartyVibe>
        <ChillVibe></ChillVibe>
        <ChicVibe></ChicVibe>
        <Form>Add a Vibe</Form> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
