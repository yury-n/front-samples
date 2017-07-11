import React from "react";

export default props =>
  <div>
    <div
      style={{
        ...imgStyle,
        backgroundImage: `url(${props.imgUrl})`,
      }}
    />
    <div style={labelStyle}>{props.label}</div>
  </div>;

const imgStyle = {
  height: "9rem",
  width: "9rem",
  margin: "auto",
  borderRadius: "50%",
  backgroundSize: "cover"
};

const labelStyle = {
  fontWeight: "bold",
  textAlign: "center",
  margin: "20px 0",
  fontSize: "25px",
};