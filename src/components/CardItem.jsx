import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
  Chip,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CardItem = ({product, stock, price, initial}) => {
  const [counter, setCounter] = useState(initial);
  const [totalPrice, setTotalPrice] = useState(price);
  const [totalStock, setTotalStock] = useState(stock)

  // onClick add products
  const add = () => {
    if (counter < totalStock) {
      setCounter(counter + 1);
      const result = counter * price + price;
      setTotalPrice(result)
    }
  };
  
  // onClick subtract products
  const subtract = () => {
    setCounter(counter - 1);
    const resultRest = totalPrice - price;
    setTotalPrice(resultRest)
  };

  // onClick buy products
  const onBuy = () => {
    setTotalStock(totalStock - counter)
    setTotalPrice(totalPrice - price)
    if (totalStock < 1) {
      setCounter(0)
    } else {
      setCounter(initial)
    }
  }

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Link to={`/item/${product.id}`}>
          <CardMedia  
            component="img"
            height="100%"
            image={product.image}
            alt={product.title}
            className={totalStock === 0 ? "cardImageHidden" : "cardImage"}
            />
            </Link>
          <Box mt={2} />
          <Link to={`/item/${product.id}`}>
          <Typography align="center" variant="h6" gutterBottom>
            {product.title} ~ {price}€
          </Typography>
          </Link>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Chip size="small" label={product.category} />
          </div>
        </CardContent>
        <Typography align="center" variant="h6">
          Stock: {totalStock}
        </Typography>
        <div className="counter">
          <Button
            size="samll"
            color="primary"
            onClick={subtract}
            disabled={(counter < 1 && true) || (stock === 0 && true)}
          >
            <RemoveCircleOutlineIcon />
          </Button>
          <Typography variant="h6">{counter}</Typography>
          <Button
            size="samll"
            color="secondary"
            onClick={add}
            disabled={counter >= totalStock && true}
          >
            <AddCircleOutlineIcon />
          </Button>
        </div>
        <CardActions>
          {counter > 0 ? (
            <div className="btnsCard">
            <Button size="large" fullWidth variant="outlined" onClick={onBuy}>
              Comprar por {totalPrice} €
            </Button>
            </div>
          ) : (
            <Button disabled size="large" fullWidth variant="outlined">
              {totalStock === 0 ? "Agotado" : "Añade productos"}
            </Button>
          )}
        </CardActions>
      </Card>
      <Box mt={2}/>
    </div>
  );
};

export default CardItem;
