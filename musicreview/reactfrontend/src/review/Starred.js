import React from "react";
function Star({
  color,
  isFilled
}) {
  return (
    <span
      className="Star"
      style={{ color }}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
}
export default Star;
