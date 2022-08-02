import React, {useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom';


const CardWidget = () => {
  const test = useContext(CartContext);
  return (
    <Link to={"/cart"}>
        <IconButton aria-label="cart">
        <Badge badgeContent={test.quantity} color="primary">
            <ShoppingCartIcon color='primary' />
        </Badge>
        </IconButton>
    </Link>
  )
}

export default CardWidget