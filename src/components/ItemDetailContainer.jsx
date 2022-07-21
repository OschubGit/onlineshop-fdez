import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import productsApi from "./productsApi";
import customFetch from '../utils/customFetch';
import Loading from "./Loading"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

    customFetch(1000, productsApi.filter((item) => item.id === id))
        .then(response => {
          setProduct(response)
          setLoading(false)
        })
        .catch(err => console.error(err));
    
},[])

  return (
    loading ? (
      <Loading/>
    ) : (
      product.map((p, index) => (
        <ItemDetail key={index} product={p}/>
      ))
    )
  )
}

export default ItemDetailContainer