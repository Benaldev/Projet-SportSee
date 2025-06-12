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

export default function Home() {
  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageTraining, setUserAverageTraining] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = 12;

  useEffect(() => {
    (async () => {
      setUser(await getUserById(userId));
      setUserActivity(await getActivityStats(userId));
      setUserAverageTraining(await getUserAverageTraining(userId));
      setUserPerformance(await getPerformanceStats(userId));
      setUserScore(await getScoreStats(userId));
      setLoading(false);
    })();
  }, [userId]);

  if (loading) return <p>Chargement des données...</p>;
  if (!user) return <p>Utilisateur non trouvé</p>;

  const performanceData = userPerformance.data.map((item) => ({
    ...item,
    kind: userPerformance.kind[item.kind],
  }));

  return (
    <div className="homeContainer">
      <h1>Bonjour {user.userInfos.firstName}</h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>

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
              <Score data={userScore} />
            </div>
          </div>
        </div>

        <div className="nutrition-section">
          <NutritionCards userId={userId} />
        </div>
      </div>
    </div>
  );
}
