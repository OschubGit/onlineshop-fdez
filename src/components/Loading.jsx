import React from "react";
import {Typography} from "@mui/material";
import { BallTriangle } from "react-loader-spinner";

const Loading = ({color="#000", height=40, width=40}) => {
  return (
    <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#000" }}
    >
      <BallTriangle color={color} height={height} width={width} />
      <Typography variant='body2'>Cargando...</Typography>
    </div>
    </>
  );
};

export default Loading;
