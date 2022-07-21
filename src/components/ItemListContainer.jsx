import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import productsApi from './productsApi';
import Loading from './Loading';
import { Box } from '@mui/material';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams()

  useEffect(() => {
    if (!category) {
      customFetch(1000, productsApi)
      .then((response) => {
        setProducts(response);
        setLoading(false)
      })
      .catch((err) => console.error(err));
    } else {
      customFetch(1000, productsApi.filter((item) => item.category === category))
      .then((response) => {
        setProducts(response);
        setLoading(false)
        })
        .catch((err) => console.error(err));
    }
  }, [category]);

  return (
    loading ?
      (
        <Loading/>
        ) : (
        <>
        <img width="100%" src='/images/springfield/spring.jpg' alt='product'/>
        <Box mt={3}/>
        <ItemList products={products} />
        </>
      )
  )
}

export default ItemListContainer