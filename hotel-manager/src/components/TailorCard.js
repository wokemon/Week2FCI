import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Tailor() {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/tailor.jpg')}
          alt="owner of the continental"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {t('tailor_name')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('tailor')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
