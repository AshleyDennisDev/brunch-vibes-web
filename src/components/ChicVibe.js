import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";

export default function ChicVibe() {
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
          <ul>
            {chic.map((restaurant) => {
              return (
                <>
                  <BrunchCards name={restaurant.name} image={restaurant.image}>
                    <h2 key={restaurant.id}>
                      {restaurant.name}
                      <img
                        src={restaurant.image}
                        alt="restaurant\s chic vibe"
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
