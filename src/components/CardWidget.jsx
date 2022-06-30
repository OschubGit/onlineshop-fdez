import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';

const CardWidget = () => {
  return (
    <div>
        <IconButton aria-label="cart">
        <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color='primary' />
        </Badge>
        </IconButton>
    </div>
  )
}

export default CardWidget