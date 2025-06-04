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
