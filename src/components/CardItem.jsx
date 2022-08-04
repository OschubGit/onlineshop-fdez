import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
} from "@mui/material";

const CardItem = ({product}) => {
  const images = product.images;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Link to={`/item/${product.id}`}>
            <CardMedia  
              component="img"
              height="100%"
              image={images[0]}
              alt={product.title}
              className={"cardImage"}
              />
            </Link>
          <Box mt={2} />
          <Link to={`/item/${product.id}`}>
          <Typography variant="body1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" gutterBottom color="secondary">
            {product.price}€
          </Typography>
          </Link>
          <div>
            <Chip size="small" label={product.category} />
          </div>
          <Box mt={2} />
          <Typography variant="body2" className="cardItem__description">
          {product.description}
          </Typography>
        <Typography variant="caption">
          <Link to={`/item/${product.id}`}>Ver más</Link>
        </Typography>
        </CardContent>
      </Card>
      <Box mt={2}/>
    </div>
  );
};

export default CardItem;
