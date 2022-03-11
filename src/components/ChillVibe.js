import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";

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
          <ul>
            {chill.map((restaurant) => {
              return (
                <>
                  <Container>
                    <BrunchCards
                      name={restaurant.name}
                      image={restaurant.image}
                      description={restaurant.description}
                      location={restaurant.location}
                    >
                      <h2 key={restaurant.id}>
                        {restaurant.name}
                        <img
                          src={restaurant.image}
                          alt="restaurant\s chill vibe"
                        />
                        {restaurant.vibe}
                        {restaurant.rating}
                        {restaurant.location}
                        {restaurant.website}
                      </h2>
                    </BrunchCards>
                  </Container>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
