import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/";
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function BrunchCards({ name, image, description }) {
  return (
    <container>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} 
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <AddLocationIcon>{location}</AddLocationIcon> */}
        <Button size="small"></Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </container>
  );
}
