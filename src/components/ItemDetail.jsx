import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemDetail = ({item}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={item.image}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="btnsCard">
          <Button size="small" fullWidth variant="outlined">
            Añadir a la cesta 
          </Button>
          <Button size="small" variant='outlined'>Comprar por {item.price} €</Button>
        </div>
      </CardActions>
    </Card>
  )
}

export default ItemDetail