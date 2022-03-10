import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function AddVibe({ setVibe }) {
  const [newVibe, setNewVibe] = useState("");
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const handleOnClick = () => {
    const vibeObject = {
      name: newName,
      vibe: newVibe,
      rating: newRating,
      location: newLocation,
    };
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vibeObject),
    })
      .then(() => {
        setNewVibe();
        setNewName();
        setNewLocation();
        setNewRating();
        fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/")
          .then((response) => response.json())
          .then((data) => setVibe(data));
      })
      .catch((err) => alert(err));
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        border: "1px",
        backgroundColor: "grey",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Restaurant Name"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Vibe" variant="outlined" />
      <TextField id="outlined-basic" label="Location" variant="outlined" />
      <TextField id="outlined-basic" label="Rating" variant="outlined" />

      <Button variant="outlined" onClick={handleOnClick}>
        Add Vibe
      </Button>
    </Box>
  );
}
