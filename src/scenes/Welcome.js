import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Hero from "../components/hero/Hero";
import PartyVibe from "../components/PartyVibe";
import ChillVibe from "../components/ChillVibe";
import ChicVibe from "../components/ChicVibe";
import Form from "../components/Form";

export default function Welcome({ user }) {
  console.log(user);
  const auth = getAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("then logout");
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h3 className="welcome">
        Welcome, {user.displayName || user.email}
        <button className="welcomeBtn" onClick={handleLogout}>
          Logout
        </button>
      </h3>
      <Hero></Hero>
      <PartyVibe></PartyVibe>
      <ChillVibe></ChillVibe>
      <ChicVibe></ChicVibe>
      {/* <Form>Add a Vibe</Form> */}
    </div>
  );
}
