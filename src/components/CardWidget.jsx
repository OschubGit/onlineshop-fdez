import React, { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { CartContext } from "../contexts/CartContext";
import { useEffect } from 'react';


const CardWidget = () => {
  const test = useContext(CartContext);

  return (
    <div>
        <IconButton aria-label="cart">
        <Badge badgeContent={test.quantity} color="primary">
            <ShoppingCartIcon color='primary' />
        </Badge>
        </IconButton>
    </div>
  )
}

export default CardWidget