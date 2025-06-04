import React from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../mocks/index";

export const getUserByMockId = () => {
  return USER_MAIN_DATA.find((user) => user.id === 12);
};
