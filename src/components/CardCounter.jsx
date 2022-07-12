import React from "react";
import { Paper, Button, Typography, Box } from "@mui/material";

const CardCounter = ({
  stock,
  initial,
  onAdd,
  onRest,
  disabled,
  disabledRest,
}) => {
  return (
    <div>
      <Paper sx={{ p: 3, minWidth: "300px" }}>
        <Typography variant="h6">Stock: {stock}</Typography>
        <Box mt={3}/>
        <div className="counter">
            <Button
            variant="outlined"
            color="primary"
            onClick={onRest}
            disabled={disabledRest}
            >
            Menos
            </Button>
            <Typography variant="h6">{initial}</Typography>
            <Button
            variant="outlined"
            color="secondary"
            onClick={onAdd}
            disabled={disabled}
            >
            Mas
            </Button>
        </div>
      </Paper>
    </div>
  );
};

export default CardCounter;
