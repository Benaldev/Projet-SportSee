import React from "react";
import "./styles.scss";
import {
  getUserByMockId,
  getActivityStats,
  getUserAverageTraining,
  getPerformanceStats,
  getScoreStats,
} from "../../components/useMock/UseMock";
import Activity from "../../components/graphics/activity/Activity";
import AverageTraining from "../../components/graphics/averageTraining/AverageTraining";
import Intensity from "../../components/graphics/intensity/Intensity";
import Score from "../../components/graphics/score/score";

export default function Home() {
  const user = getUserByMockId(12);

  const userActivity = getActivityStats(12);

  const userAverageTraining = getUserAverageTraining(12);

  const userPerformance = getPerformanceStats(12);
  const performanceData = userPerformance.data.map((item) => ({
    ...item,
    kind: userPerformance.kind[item.kind],
  }));

  const userScore = getScoreStats(12);

  return (
    <div className="homeContainer">
      <h1>Bonjour {user.userInfos.firstName}</h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>

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
  );
}
