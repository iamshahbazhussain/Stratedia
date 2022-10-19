import React from "react";

/////////////////CSS///////////////////
import "./Card.scss";

const Card = ({ title, para, num, borderColor, chart, color }) => {
  return (
    <div className="main_card">
      <div className="card_title">{title}</div>
      <div className="para">{para}</div>

      <div
        className="num"
        style={borderColor ? { border: `1px solid ${borderColor}` } : null}
      >
        <div className="number" style={color ? { color: `${color}` } : null}>
          {num}
        </div>
      </div>

      <div className="chart">{chart}</div>
    </div>
  );
};

export default Card;
