import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import "../App.css";

export default function ChillVibe() {
  const [chill, setChill] = useState([]);
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
        </div>
      )}
    </div>
  );
}
