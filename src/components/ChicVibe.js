import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export default function ChicVibe() {
  const [chic, setChic] = useState([]);
  const { pathname } = useLocation();

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
          {pathname === "/chic" && (
            <div className="addVibeLink">
              <p>
                Add to Vibe! <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
