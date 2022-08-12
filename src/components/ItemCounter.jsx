import React from "react";
import Button from "./buttons/Button";
import { MdRemoveCircleOutline, MdControlPoint } from "react-icons/md";


const ItemCounter = ({
  subtract,
  isDisabledAdd,
  counter,
  isDisabledSubtract,
  onAdd,
}) => {
  return (
    <>
      <div className="counter">
        <Button
          className="cbutton cButton-outlined"
          onClick={subtract}
          disabled={isDisabledSubtract}
        >
          <MdRemoveCircleOutline />
        </Button>
        <h3>{counter}</h3>
        <Button
          className="cbutton cButton-outlined"
          onClick={onAdd}
          disabled={isDisabledAdd}
        >
          <MdControlPoint />
        </Button>
      </div>
  
    </>
  );
};

export default ItemCounter;
