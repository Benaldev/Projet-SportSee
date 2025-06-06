import React from "react";
import "./styles.scss";

const Card = ({ icon, label, value, unit }) => {
  return (
    <div className="nutrition-card">
      <img src={icon} alt={label} className="nutrition-icon" />
      <div className="nutrition-info">
        <p className="nutrition-value">
          {value}
          {unit}
        </p>
        <p className="nutrition-label">{label}</p>
      </div>
    </div>
  );
};

export default Card;
