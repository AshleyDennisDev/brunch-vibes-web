import "./App.css";
import ChillVibe from "./components/ChillVibe";
import PartyVibe from "./components/PartyVibe";
import ChicVibe from "./components/ChicVibe";
import Form from "./components/Form";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <PartyVibe></PartyVibe>
      <ChillVibe></ChillVibe>
      <ChicVibe></ChicVibe>
      <Form>Add a Vibe</Form>
    </div>
  );
}

export default App;
