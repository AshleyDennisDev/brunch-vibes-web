import React, { useEffect, useState } from "react";

export default function ChillVibe() {
    const [chill, setChill] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/restaurants/chill")
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
            <ul>
              {chill.map((restaurant) => {
                return (
                  <>
                    <h2 key={restaurant.id}>{restaurant.name}</h2>
                  </>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

 