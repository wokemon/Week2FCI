import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Owner() {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/valet.jpg')}
          alt="owner of the continental"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Winston Scott
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('valet')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
