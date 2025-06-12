import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.scss";

import caloriesIcon from "../../assets/images/calories-icon.png";
import proteinIcon from "../../assets/images/protein-icon.png";
import carbsIcon from "../../assets/images/carbs-icon.png";
import fatIcon from "../../assets/images/fat-icon.png";
import { getNutritionStats } from "../../services/api";

const NutritionCards = ({ userId }) => {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    (async () => {
      setStats(await getNutritionStats(userId));
    })();
  }, [userId]);

  if (!stats) return <p>Données nutritionnelles indisponibles</p>;

  const data = [
    {
      icon: caloriesIcon,
      label: "Calories",
      value: stats.calorieCount,
      unit: "kCal",
    },
    {
      icon: proteinIcon,
      label: "Protéines",
      value: stats.proteinCount,
      unit: "g",
    },
    {
      icon: carbsIcon,
      label: "Glucides",
      value: stats.carbohydrateCount,
      unit: "g",
    },
    {
      icon: fatIcon,
      label: "Lipides",
      value: stats.lipidCount,
      unit: "g",
    },
  ];

  return (
    <div className="nutrition-cards-container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default NutritionCards;
