import { useState } from "react";
import "./style.scss";

function ColorBox() {
  const storageColor = JSON.parse(localStorage.getItem("color"));
  const colors = ["deeppink", "green", "yellow", "black", "blue"];
  const [color, setColor] = useState(storageColor ?? "deeppink");

  const handleChangeColor = () => {
    const lengthColors = colors.length;
    const index = Math.floor(Math.random() * lengthColors);

    setColor(() => {
      const newColor = colors[index];
      const jsonColor = JSON.stringify(newColor);
      localStorage.setItem("color", jsonColor);
      return newColor;
    });
  };
  return (
    <div className="container">
      <div
        className="box"
        style={{ backgroundColor: color }}
        onClick={handleChangeColor}
      >
        <h1 style={{color: colors[Math.floor((Math.random() * colors.length))]}}>Color Box</h1>
      </div>
    </div>
  );
}

export default ColorBox;
