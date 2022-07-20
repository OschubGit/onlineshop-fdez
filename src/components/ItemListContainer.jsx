import { Box, Divider, Typography } from '@mui/material';
import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';


const ItemListContainer = () => {
  return (
    <div>
        <Typography>Desafio - Contador, map y promise</Typography>
        <Box mt={5}/>
        <ItemList/>
        <Box mt={5}/>
        <Divider/>
        <Box mt={5}/>
        <Typography>Desafio - Detalle producto</Typography>
        <Box mt={5}/>
        <ItemDetailContainer/>
    </div>
  )
}

export default ItemListContainer