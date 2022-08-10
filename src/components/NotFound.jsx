import React from 'react'
import { Alert } from '@mui/material'
import { categories } from "../utils/categories";
import { Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NotFound = () => {
  return (
    <div className="noProducts">
    <div className="noProducts_alert">
        <Alert variant="filled" severity="info">
            Página no encontrada
        </Alert>
    </div>
    <div className="noProducts_related">
        <div>
        <h3>Puedes buscar en las siguientes categorías categorías</h3>
        <ArrowForwardIcon/>
        </div>
        {categories.map((m) => (
            <div className="noProducts_related-box"><Link to={`/category/${m.category}`}>{m.category}</Link></div>
        ))}
    </div>
</div>
  )
}

export default NotFound
