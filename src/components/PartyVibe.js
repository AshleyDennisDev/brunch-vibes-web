import React, { useEffect, useState } from "react";

 export default function PartyVibe() {
  const [party, setParty] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurants/party")
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
                  <h2 key={restaurant.id}>
                    {restaurant.name}
                    <img src={restaurant.image} alt='restaurant\s party vibe'/>
                    {restaurant.vibe}
                    {restaurant.rating}
                    {restaurant.location}
                    {restaurant.website}
                    </h2>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
