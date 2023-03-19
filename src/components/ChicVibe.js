import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import Form from "../components/Form";
import "../App.css";
import Login from "../scenes/LoginPage/Login";

export default function ChicVibe() {
  const [user, setUser] = useState();
  const [chic, setChic] = useState([]);
  useEffect(() => {
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/chic")
      .then((response) => response.json())
      .then((data) => setChic(data))
      .catch(alert);
  }, []);
  return (
    <div>
      {!chic ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2 id="chicVibe">Chic Vibes</h2>
          <div className="vibe">
            {chic.map((restaurant) => {
              return (
                <BrunchCards
                  name={restaurant.name}
                  image={restaurant.image}
                  description={restaurant.description}
                  location={restaurant.location}
                  rating={restaurant.rating}
                  website={restaurant.website}
                />
              );
            })}
          </div>
          {/* { user ? <Form user={user}>Add a Vibe</Form> : <Login setUser={setUser}/>} */}
        </div>
      )}
    </div>
  );
}
