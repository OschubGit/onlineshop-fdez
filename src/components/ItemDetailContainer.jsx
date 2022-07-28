import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
/* import productsApi from "./productsApi"; */
import customFetch from '../utils/customFetch';
import Loading from "./Loading"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  
  const data = fetch("https://62e246abe8ad6b66d856e6b5.mockapi.io/api/coder/allcloths")
    customFetch(data)
        .then((response) => response.json())
        .then(result => {
          const filterPerId = result.filter((item) => item.id === id)
          setProduct(filterPerId)
          setLoading(false)
        })
        .catch(err => console.error(err));
    
},[id])

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