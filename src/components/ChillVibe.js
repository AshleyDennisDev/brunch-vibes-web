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
                      rating={restaurant.rating}
                    ></BrunchCards>
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
