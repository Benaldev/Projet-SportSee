import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/index";

const USER_ID = import.meta.env.VITE_USER_ID;
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === "true";

const shouldUseMockData = () => {
  return USE_MOCK_DATA;
};

async function fetchWithFallback(url, fallbackData) {
  if (shouldUseMockData()) {
    console.warn(`Mock utilisé pour ${url}`);
    return { data: fallbackData, source: "MOCK" };
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API fetch failed: ${response.status}`);
    const data = await response.json();
    console.info(`API utilisée pour ${url}`);
    return { data: data.data, source: "API" };
  } catch (error) {
    console.error(`Problème avec l'API pour ${url} : ${error.message}`);
    return { data: null, source: "ERROR", error: error.message };
  }
}

export async function getUserById(userId = USER_ID) {
  const url = `http://localhost:3000/user/${userId}`;
  const fallback = USER_MAIN_DATA.find((user) => user.id === Number(userId));
  return fetchWithFallback(url, fallback);
}

export async function getActivityStats(userId = USER_ID) {
  const url = `http://localhost:3000/user/${userId}/activity`;
  const fallback = USER_ACTIVITY.find((user) => user.userId === Number(userId));
  return fetchWithFallback(url, fallback);
}

export async function getUserAverageTraining(userId = USER_ID) {
  const url = `http://localhost:3000/user/${userId}/average-sessions`;
  const fallback = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === Number(userId)
  );
  return fetchWithFallback(url, fallback);
}

export async function getPerformanceStats(userId = USER_ID) {
  const url = `http://localhost:3000/user/${userId}/performance`;
  const fallback = USER_PERFORMANCE.find(
    (user) => user.userId === Number(userId)
  );
  return fetchWithFallback(url, fallback);
}

export async function getScoreStats(userId = USER_ID) {
  return getUserById(userId);
}

export const getNutritionStats = async (userId = USER_ID) => {
  const { data: user } = await getUserById(userId);
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
