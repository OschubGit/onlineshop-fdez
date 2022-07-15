import React, { useState } from "react";
import CardCounter from "./CardCounter";

const products = [1, 2, 3, 4, 5, 6];
const withOutStock = products.length === 0;

const ItemCount = () => {
  const [counter, setCounter] = useState(withOutStock ? 0 : 1);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleClickRest = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <CardCounter
        initial={counter}
        stock={products.length}
        onAdd={handleClick}
        onRest={handleClickRest}
        disabled={counter >= products.length && true}
        disabledRest={(counter < 1 && true) || (products.length === 0 && true)}
      />
    </div>
  );
};

export default ItemCount;
