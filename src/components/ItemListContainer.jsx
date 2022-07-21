import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import productsApi from './productsApi';
import Loading from './Loading';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams()

  useEffect(() => {
    if (!category) {
      customFetch(2000, productsApi)
      .then((response) => {
        setProducts(response);
        setLoading(false)
      })
      .catch((err) => console.error(err));
    } else {
      customFetch(2000, productsApi.filter((item) => item.category === category))
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
        <ItemList products={products}  />
      )
  )
}

export default ItemListContainer