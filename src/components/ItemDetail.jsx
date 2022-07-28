import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { Typography, Divider, Box, Grid, Paper, Rating } from "@mui/material";
import ItemCounter from "./ItemCounter";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ product, stock = product.stock, initial = 0 }) => {
  const [counter, setCounter] = useState(initial);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [totalStock, setTotalStock] = useState(stock);
  const test = useContext(CartContext)


  // onClick add products
  const onAdd = () => {
    if (counter < totalStock) {
      setCounter(counter + 1);
    }
  };

  // onClick subtract products
  const subtract = () => {
    setCounter(counter - 1);
    const resultRest = totalPrice - product.price;
    setTotalPrice(resultRest);
  };

  // onClick buy products
  const onBuy = (qty) => {
    setTotalStock(totalStock - counter);
    const result = counter * product.price;
    setTotalPrice(result);

    test.addToCart(product, qty)
    

    if (totalStock < 1) {
      setCounter(0);
    } else {
      setCounter(initial);
    }
  };

  return (
    <div className="itemDetail">
      <Box my={3} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <div className="itemDetailGrid">
            <div className="itemDetailGrid__images">
              {product &&
                product.images.map((i, index) => (
                  <div key={index}>
                    <img width="100%" src={i.image} alt="ItemDetailImage" />
                  </div>
                ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="itemDetailInfo">
            <div className="itemDetailInfo__title">
              <Typography variant="h6">{product.title}</Typography>
            </div>
            <div className="itemDetailInfo__price">
              <Typography variant="h6">{product.price}€</Typography>
            </div>
            <div className="itemDetailInfo__price">
              <Typography variant="body2">{product.description}</Typography>
            </div>
            {/* <div className="itemDetailInfo__size">
            Size:
              {product &&
                product.sizes.map((s, index) => <p key={index}>{s.size}</p>)}
            </div> */}
            <Divider />
            <>
              {totalStock !== stock ? (
                <>
                  <ItemCounter
                    counter={counter}
                    subtract={subtract}
                    onAdd={onAdd}
                    isDisabledAdd={
                      (stock === 0 && true) || (counter === totalStock && true)
                    }
                    isDisabledSubtract={
                      (counter >= totalStock && false) ||
                      (counter === 0 && true)
                    }
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => onBuy(counter)}
                    disabled={totalStock === 0}
                  >
                    Añadir a la cesta
                  </Button>
                  <Button variant="contained" color="secondary">
                    <Link to={"/cart"}>Comprar</Link>
                  </Button>
                </>
              ) : (
                <>
                  <ItemCounter
                    counter={counter}
                    subtract={subtract}
                    onAdd={onAdd}
                    isDisabledAdd={
                      (stock === 0 && true) || (counter === totalStock && true)
                    }
                    isDisabledSubtract={
                      (counter >= totalStock && false) ||
                      (counter === 0 && true)
                    }
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => onBuy(counter)}
                    disabled={totalStock === 0}
                  >
                    Añadir a la cesta
                  </Button>
                </>
              )}
            </>
            <div className="itemDetailInfo__stock">
              <Typography align="center" variant="caption">
                Quedan {totalStock} en stock.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {product.comments.map((c, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Paper>
                <Typography>{c.name}</Typography>
                <Typography>{c.createdAt}</Typography>
                <Rating disabled name="simple-controlled" value={c.rating} />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ItemDetail;
