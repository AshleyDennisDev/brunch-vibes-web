import * as React from "react";
import defaultPic from'../images/defaultPic.jpeg'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Rating
} from "@mui/material/";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function BrunchCards({ name, image, description, location, rating }) {
  return (
    <container>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image || defaultPic} alt={name}/>
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
      <CardActions>
      <Typography component="rating"></Typography>
<Rating name="rating" value={rating} readOnly />
{/* <IconButton aria-label='location'>
        <AddLocationIcon location={location}></AddLocationIcon>
          </IconButton> */}
        <Button size="small"></Button>
        <Button size="small">Website</Button>
      </CardActions>
    </Card>
    </container>
  );
}
