import { Container } from "@mui/material";
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
          <h2 id="chicVibe">Chic Vibes</h2>
          <ul>
            {chic.map((restaurant) => {
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
                          alt="restaurant\s chic vibe"
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
