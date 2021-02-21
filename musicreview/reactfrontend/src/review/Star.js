import React from "react";
function Star({
  value,
  color,
  handleHover,
  handleHoverLeave,
  handleClick,
  isFilled
}) {
  return (
    <span
      className="Star"
      style={{ color }}
      onMouseEnter={() => handleHover(value)}
      onMouseLeave={() => handleHoverLeave(value)}
      onClick={() => handleClick(value)}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
}
export default Star;
