import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography, Divider, Box} from '@mui/material';

const ItemDetail = ({product}) => {

  return (
    <>
    <Typography variant="h3" color={"#000"}>
        Detalle de producto
      </Typography>
      <Divider/>
      <Box my={3}/>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image={product.image}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="btnsCard">
          <Button size="small" fullWidth variant="outlined">
            Añadir a la cesta 
          </Button>
          <Button size="small" variant='outlined'>Comprar por {product.price} €</Button>
        </div>
      </CardActions>
    </Card>
    </>
  )
}

export default ItemDetail