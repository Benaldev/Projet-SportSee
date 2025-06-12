import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/index";

async function fetchWithFallback(url, fallbackData) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API fetch failed");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.warn(`Fetch failed for ${url}, using fallback data.`);
    return fallbackData;
  }
}

export async function getUserById(id) {
  const url = `http://localhost:3000/user/${id}`;
  const fallback = USER_MAIN_DATA.find((user) => user.id === id);
  return fetchWithFallback(url, fallback);
}

export async function getActivityStats(id) {
  const url = `http://localhost:3000/user/${id}/activity`;
  const fallback = USER_ACTIVITY.find((user) => user.userId === id);
  return fetchWithFallback(url, fallback);
}

export async function getUserAverageTraining(id) {
  const url = `http://localhost:3000/user/${id}/average-sessions`;
  const fallback = USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
  return fetchWithFallback(url, fallback);
}

export async function getPerformanceStats(id) {
  const url = `http://localhost:3000/user/${id}/performance`;
  const fallback = USER_PERFORMANCE.find((user) => user.userId === id);
  return fetchWithFallback(url, fallback);
}

export async function getScoreStats(id) {
  const url = `http://localhost:3000/user/${id}`;
  const fallbackUser = USER_MAIN_DATA.find((user) => user.id === id);
  return fetchWithFallback(url, fallbackUser);
}

export const getNutritionStats = async (id) => {
  const user = await getUserById(id);
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
