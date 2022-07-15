import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = ({color="#00BFFF", height=40, width=40}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff" }}
    >
      <BallTriangle color={color} height={height} width={width} />
      <p>Cargando...</p>
    </div>
  );
};

export default Loading;
