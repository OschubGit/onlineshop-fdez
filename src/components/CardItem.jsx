import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ product }) => {
  const images = product.images;

  return (
    <>
      <div className="o-card">
        <div className="o-card_wrap">
          <div className="aditional_info text-info">
              <p className="tag-category">{product.category}</p>
              <span>{product.description}</span>
          </div>
          <div className="o-card_image">
            <Link to={`/item/${product.id}`}>
              <img src={images[0]} alt="imagecard" />
            </Link>
          </div>
        </div>
        <Link to={`/item/${product.id}`}>
          <div className="o-card_infoProduct text-info">
            <div className="info">
              <p>{product.title}</p>
            </div>
            <div className="info">
              <p>{product.price}€</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardItem;
