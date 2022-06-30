import React from 'react'
import { Typography } from '@mui/material'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <Typography variant='h1' fontWeight="800">
            {greeting}
        </Typography>
    </div>
  )
}

export default ItemListContainer