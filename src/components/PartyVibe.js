import { Container, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import BrunchCards from "./Cards";
import AddLocationIcon from "@mui/icons-material/AddLocation";

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
          <h2>Party Vibes</h2>
          <ul>
            {party.map((restaurant) => {
              return (
                <>
                  <Container id="party">
                    <BrunchCards
                      name={restaurant.name}
                      image={restaurant.image}
                      description={restaurant.description}
                      location={restaurant.location}
                    >
                      <AddLocationIcon>{restaurant.location}</AddLocationIcon>
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
