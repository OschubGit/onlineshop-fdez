import React from "react";
import { Alert } from "@mui/material";
import { categories } from "../utils/categories";
import { Link, useParams } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NoProducts = () => {
    const {category} = useParams()
  return (
    <div className="noProducts">
        <div className="noProducts_alert">
            <Alert variant="filled" severity="info">
                No hay productos en la categoría {category}
            </Alert>
        </div>
        <div className="noProducts_related">
            <div>
            <h3>Puedes buscar en otras categorías</h3>
            <ArrowForwardIcon/>
            </div>
            {categories.map((m) => (
                <div className="noProducts_related-box"><Link to={`/category/${m.category}`}>{m.category}</Link></div>
            ))}
        </div>
    </div>
  );
};

export default NoProducts;
