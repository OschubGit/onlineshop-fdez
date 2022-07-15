import React from 'react'
import {Box, Card, CardContent, Typography, CardActions, CardMedia, Button, Chip} from  "@mui/material";

const Item = ({title, image, description, category, price}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt={title}
        />
        <Box mt={2}/>
        <Typography variant='h6' gutterBottom>
            {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {description}
        </Typography>
        <Typography variant="body2">
          <Chip label={category} color="primary" variant="outlined" />
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Comprar por {price}</Button>
      </CardActions>
    </Card>
  )
}

export default Item