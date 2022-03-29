import "./App.css";
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
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
