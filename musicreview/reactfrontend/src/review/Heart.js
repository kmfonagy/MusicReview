import React from 'react';

function Heart({
    value,
    color,
    handleHover,
    handleHoverLeave,
    handleClick,
    isFilled
}) {
    return (
        <span
            className="Heart"
            style={{ color:'#4E6891'}}
            onMouseEnter={() => handleHover(value)}
            onMouseLeave={() => handleHoverLeave(value)}
            onClick={() => handleClick(value)}
        >
            {isFilled ? "♥️" : "♡"}
        </span>
    );
}

export default Heart;