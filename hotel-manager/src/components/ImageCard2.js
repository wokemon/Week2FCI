import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Concierge() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/charon.jpg')}
          alt="owner of the continental"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Winston Scott
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Winston Scott is the current owner and manager of the New York Continental Hotel, an establishment that functions as a neutral territory and safe zone for criminals and hired killers. No business is allowed to be conducted on Continental grounds, and those who violate this important rule are given severe penalties: which are often ordered and overseen by Winston himself.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}