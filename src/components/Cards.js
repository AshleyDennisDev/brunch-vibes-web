import * as React from "react";
import defaultPic from'../images/defaultPic.jpeg'
import '../App.css'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating
} from "@mui/material/";

export default function BrunchCards({ name, image, description, location, rating }) {
  return (
    <container>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image || defaultPic } alt={name}/>
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

      </CardContent>
      <CardActions display='flex' align-items='center'>
      <Typography component="rating" >
      {rating} 
        </Typography>
        <Rating name="rating" value={rating} readOnly />

        <Button size="small" value={rating}></Button>
        <Button size="small">Website</Button>
      </CardActions>
    </Card>
    </container>
  );
}
