import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function AddVibe() {
  const [newVibe, setNewVibe] = useState([]);

  const handleOnClick = () => {
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVibe),
    })
      .then(() => {
        fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/")
          .then((response) => response.json())
          .then((data) => setNewVibe(data));
      })
      .catch((err) => alert(err));
  };
  const handleChange = (event) => {
    setNewVibe({ ...newVibe, [event.target.name]: event.target.value });
    console.log(event);
  };

  return (
    <Box id='box'
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
        id="nameField"
        label="Restaurant Name"
        name="name"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="vibeField"
        name="vibe"
        label="Vibe"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="locationField"
        name="location"
        label="Location"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="ratingField"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={handleChange}
      />

      <Button variant="outlined" onClick={handleOnClick}>
        Add Vibe
      </Button>
    </Box>
  );
}
