import React from "react";

export const Style3 = () => {
  const isRadius = false;
  const padding = "20px";

  const titleStyle = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "wheat",
    textShadow: "2px 2px 4px #000000",
    border: "1px solid black",
    borderRadius: isRadius ? "10px" : "0px",
    padding,
    display: "flex",

    justifyContent: "center",
  };
  return (
    <div>
      <h1>STYLES</h1>

      <h2 style={titleStyle}>Internal Styles</h2>
      <h2 style={{...titleStyle, color: "blue", backgroundColor: "black"}}>Internal Styles and inline Style</h2>
    </div>
  );
};
