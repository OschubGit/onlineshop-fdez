import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import productsApi from "./productsApi";
import customFetch from '../utils/customFetch';
import Loading from "./Loading"

const ItemDetailContainer = () => {

const [product, setProduct] = useState({});

useEffect(() => {

    customFetch(2000, productsApi[2])
        .then(response => setProduct(response))
        .catch(err => console.error(err));
    
},[])

  return (
      product.id ? (
        <ItemDetail item={product}/>
      ) : (
        <Loading/>
      )
  )
}

export default ItemDetailContainer