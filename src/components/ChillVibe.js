import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export default function ChillVibe() {
  const [chill, setChill] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/chill")
      .then((response) => response.json())
      .then((data) => setChill(data))
      .catch(alert);
  }, []);

  return (
    <div>
      {!chill ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2 id="chillVibe">Chill Vibes</h2>
          <div className="vibe">
            {chill.map((restaurant) => {
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
          {pathname === "/chill" && (
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
