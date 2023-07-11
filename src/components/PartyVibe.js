import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export default function PartyVibe() {
  const [party, setParty] = useState([]);
  useEffect(() => {
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/party")
      .then((response) => response.json())
      .then((data) => setParty(data))
      .catch(alert);
  }, []);
  const { pathname } = useLocation();
  return (
    <div>
      {!party ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2 id="partyVibe">Party Vibes</h2>
          <div className="vibe">
            {party.map((restaurant) => {
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
          {pathname === "/party" && (
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
