import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";

export default function PartyVibe() {
  const [party, setParty] = useState([]);
  useEffect(() => {
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/party")
      .then((response) => response.json())
      .then((data) => setParty(data))
      .catch(alert);
  }, []);
  return (
    <div>
      {!party ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <ul>
            {party.map((restaurant) => {
              return (
                <>
                  <BrunchCards name={restaurant.name} image={restaurant.image}>
                    <h2 key={restaurant.id}>
                      {restaurant.name}
                      <img
                        src={restaurant.image}
                        alt="restaurant\s party vibe"
                      />
                      {restaurant.vibe}
                      {restaurant.rating}
                      {restaurant.location}
                      {restaurant.website}
                    </h2>
                  </BrunchCards>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
