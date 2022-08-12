import React, { useState, useContext, useCallback } from "react";
import Button from "./buttons/Button";
import ItemCounter from "./ItemCounter";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ImageViewer from "react-simple-image-viewer";

const ItemDetail = ({ product, stock = product.stock, initial = 0 }) => {
  const [counter, setCounter] = useState(initial);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [totalStock, setTotalStock] = useState(stock);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const test = useContext(CartContext);

  const filterPhotos = product.images.map((m) => m);
  const images = filterPhotos;

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  console.log(images);
  // onClick subtract products
  const subtract = () => {
    setCounter(counter - 1);
    const resultRest = totalPrice - product.price;
    setTotalPrice(resultRest);
  };

  // onClick add products
  const onAdd = () => {
    if (counter < totalStock) {
      setCounter(counter + 1);
    }
  };

  // onClick buy products
  const onBuy = (qty) => {
    setTotalStock(totalStock - qty);

    const result = counter * product.price;

    setTotalPrice(result);

    test.addToCart(product, qty, result, totalStock);

    test.calcQuantity();

    if (totalStock < 1) {
      setCounter(0);
    } else {
      setCounter(initial);
    }
  };

  return (
    <div id="itemDetail" className="c-container grid">
      <div className="col-12" style={{ position: "relative" }}>
        <div className="line one"></div>
        <div className="line two"></div>
        <div className="line three"></div>
        <div className="itemDetail">
          <div className="grid">
            <div className="col-3 col-xxs-4 col-xs-6 col-sm-8 col-md-4 col-xl-3">
              {product.additional && (
              <div className="itemDetail_materials">
                <p className="itemDetail_materials-title aditional">
                  Materiales y cuidados
                </p>
                <p className="itemDetail_materials-description aditional">
                 {product.additional}
                </p>
              </div>
              )}
            </div>
            <div className="col-6 col-xxs-4 col-xs-6 col-sm-8 col-md-5 col-xl-6">
              <div className="grid_v2">
                {product &&
                  product.images.map((i, index) => (
                    <div className="itemDetail_images" key={index}>
                      <img
                        onClick={() => openImageViewer(index)}
                        width="100%"
                        src={i}
                        alt="ItemDetailImage"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-3 col-xxs-4 col-xs-6 col-sm-8 col-md-3 col-xl-3">
              <div className="itemDetailInfo aditional">
                <div className="itemDetailInfo__title">
                  <p>{product.title}</p>
                </div>
                <div className="itemDetailInfo__price">
                  <p>{product.price}€</p>
                </div>
                <div className="itemDetailInfo__description">
                  {product.description}
                </div>
                <hr />
                <>
                  {/* Muestra btn de comprar */}
                  <ItemCounter
                    counter={counter}
                    subtract={subtract}
                    onAdd={onAdd}
                    isDisabledAdd={
                      (stock === 0 && true) || (counter === totalStock && true)
                    }
                    isDisabledSubtract={
                      (counter >= totalStock && false) ||
                      (counter === 0 && true)
                    }
                  />
                  <Button
                    className="cbutton cButton-outlined"
                    onClick={() => onBuy(counter, product.id)}
                    disabled={totalStock === 0 || counter === 0}
                  >
                    Añadir a la cesta
                  </Button>
                  {totalStock < stock && (
                    <Link to={"/cart"}>
                    <Button className="cButton cButton-primary cButton-fullwidth">
                      Ver cesta
                    </Button>
                    </Link>
                  )}
                </>
                <div className="itemDetailInfo__stock">
                  <span>
                    Quedan {totalStock} en stock.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
