import React from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../mocks/index";

export const getUserByMockId = (id) => {
  return USER_MAIN_DATA.find((user) => user.id === id);
};

export const getActivityStats = (id) => {
  return USER_ACTIVITY.find((user) => user.userId === id);
};

export const getUserAverageTraining = (id) => {
  return USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
};

export const getPerformanceStats = (id) => {
  return USER_PERFORMANCE.find((user) => user.userId === id);
};

export const getScoreStats = (id) => {
  const user = USER_MAIN_DATA.find((user) => user.id === id);
  if (!user) return null;
  if (user.todayScore) return { todayScore: user.todayScore };
  if (user.score) return { score: user.score };
  return null;
};

export const getNutritionStats = (id) => {
  const user = USER_MAIN_DATA.find((user) => user.id === id);
  if (!user) return null;

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    user.keyData;

  return {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
  };
};
