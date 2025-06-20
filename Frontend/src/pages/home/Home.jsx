import React, { useState, useEffect } from "react";
import "./styles.scss";
import Activity from "../../components/graphics/activity/Activity";
import AverageTraining from "../../components/graphics/averageTraining/AverageTraining";
import Intensity from "../../components/graphics/intensity/Intensity";
import Score from "../../components/graphics/score/score";
import NutritionCards from "../../components/cards/NutritionCards";

import {
  getActivityStats,
  getPerformanceStats,
  getScoreStats,
  getUserAverageTraining,
  getUserById,
} from "../../services/api";

import { formatPerformance, formatScore } from "../../services/formatter";
import { USER_ID } from "../../services/config";

export default function Home() {
  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageTraining, setUserAverageTraining] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const userRes = await getUserById();
        const activityRes = await getActivityStats();
        const avgTrainingRes = await getUserAverageTraining();
        const performanceRes = await getPerformanceStats();
        const scoreRes = await getScoreStats();

        if (
          userRes.source === "ERROR" ||
          activityRes.source === "ERROR" ||
          avgTrainingRes.source === "ERROR" ||
          performanceRes.source === "ERROR" ||
          scoreRes.source === "ERROR"
        ) {
          throw new Error(
            "Erreur lors du chargement des données depuis l'API. Veuillez réessayer plus tard."
          );
        }

        setUser(userRes.data);
        setUserActivity(activityRes.data);
        setUserAverageTraining(avgTrainingRes.data);
        setUserPerformance(performanceRes.data);
        setUserScore(scoreRes.data);

        setSources([
          userRes.source,
          activityRes.source,
          avgTrainingRes.source,
          performanceRes.source,
          scoreRes.source,
        ]);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>Utilisateur non trouvé.</p>;

  const performanceData = formatPerformance(userPerformance);
  const scoreValue = formatScore(userScore);

  const usingMock = sources.some((source) => source === "MOCK");

  return (
    <div className="homeContainer">
      <h1>Bonjour {user.userInfos.firstName}</h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>

      {usingMock && <p>Utilisation de données mockées.</p>}

      <div className="main-content">
        <div className="graphs-section">
          <div className="activity-container">
            <Activity data={userActivity.sessions} />
          </div>

          <div className="small-charts-container">
            <div className="chart-wrapper chart-training">
              <AverageTraining data={userAverageTraining.sessions} />
            </div>
            <div className="chart-wrapper">
              <Intensity data={performanceData} />
            </div>
            <div className="chart-wrapper chart-score">
              <Score data={{ score: scoreValue }} />
            </div>
          </div>
        </div>

        <div className="nutrition-section">
          <NutritionCards userId={USER_ID} />
        </div>
      </div>
    </div>
  );
}
