import { Container, IconButton, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import "../App.css";

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
          <h2 id='partyVibe'>Party Vibes</h2>
          <ul>
            {party.map((restaurant) => {
              return (
                <>
                  <Container id="vibe">
                    <BrunchCards
                      name={restaurant.name}
                      image={restaurant.image}
                      description={restaurant.description}
                      location={restaurant.location}
                      rating={restaurant.rating}
                      website={restaurant.website}
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
