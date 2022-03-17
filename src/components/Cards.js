import React from "react";
import defaultPic from "../images/defaultPic.jpeg";
import "../App.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
} from "@mui/material/";

export default function BrunchCards({
  name,
  image,
  description,
  location,
  rating,
  website,
}) {
  return (
    <container>
      <Card className="vibeCard">
        <CardMedia
          component="img"
          height="170"
          image={image || defaultPic}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {description}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {location}
          </Typography>
          <CardActions class="cardActions">
            <Typography component="rating">{rating}</Typography>
            <Rating name="rating" value={rating} readOnly />

            <Button id="webButton" size="small" href={website}>
              Website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </container>
  );
}
