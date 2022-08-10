import React from "react";
import { Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "./buttons/Button";

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
          <RemoveCircleOutlineIcon />
        </Button>
        <Typography variant="h6">{counter}</Typography>
        <Button
          className="cbutton cButton-outlined"
          onClick={onAdd}
          disabled={isDisabledAdd}
        >
          <AddCircleOutlineIcon />
        </Button>
      </div>
  
    </>
  );
};

export default ItemCounter;
