import React from "react";
import { Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
          size="samll"
          color="primary"
          onClick={subtract}
          disabled={isDisabledSubtract}
        >
          <RemoveCircleOutlineIcon />
        </Button>
        <Typography variant="h6">{counter}</Typography>
        <Button
          size="samll"
          color="secondary"
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
