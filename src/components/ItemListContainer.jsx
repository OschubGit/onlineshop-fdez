import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import NoProducts from '../containers/NoProducts'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import { getDataFromFirebase } from '../utils/getDataFirestore'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    getDataFromFirebase(category)
      .then((result) => {
        setProducts(result)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [category])

  return loading ? (
    <Loading />
  ) : products.length > 0 ? (
    <>
      <div className="c-container grid" style={{ position: 'relative' }}>
        <div className="line one"></div>
        <div className="line two"></div>
        <div className="line three"></div>
        <div className="line four"></div>
        <div className="col-12 col-xs-6 col-sm-8 col-md-12 col-xl-12">
          <ItemList products={products} />
        </div>
      </div>
    </>
  ) : (
    <NoProducts
      alert={`No hay productos para la categoría ${category}`}
      title="Puedes buscar en otras categorías"
    />
  )
}

export default ItemListContainer
