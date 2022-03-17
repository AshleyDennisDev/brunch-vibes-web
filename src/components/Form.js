import React, {  useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function AddVibe() {
  const [vibe, setVibe] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [location, setLocation] = useState("");


  const newVibe = {
    name,
    location,
    vibe,
    rating,
  };


  const handleOnClick = () => {
    fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVibe),
    })
      .then(() => {
        fetch("https://brunch-vibes-ad.uc.r.appspot.com/restaurants/").then(
          (response) => {
            response.json();
            window.location.reload()
          }
        );
        // .then((data) => setNewVibe(data));
      })
      .catch((err) => alert(err));
  };

  return (
    <Box
      id="box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        border: "1px",
        backgroundColor: "grey",
      }}
      noValidate
      autoComplete="off"
    >
      <h3>Add to Vibes</h3>
      <TextField
        id="nameField"
        label="Restaurant Name"
        name="name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="locationField"
        name="location"
        label="Location"
        variant="outlined"
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        id="ratingField"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={(e) => setRating(e.target.value)}
      />
      <>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Vibe</InputLabel>
          <Select
            labelId="selectVibe"
            id="vibeField"
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            autoWidth
            label="Vibe"
          >
            <MenuItem value={"party"}>Party</MenuItem>
            <MenuItem value={"chill"}>Chill</MenuItem>
            <MenuItem value={"chic"}>Chic</MenuItem>
          </Select>
        </FormControl>
      </>
      <Button variant="outlined" onClick={handleOnClick}>
        Submit
      </Button>
    </Box>
  );
}
