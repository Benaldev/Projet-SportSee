import React from "react";
import "./styles.scss";
import {
  getUserByMockId,
  getActivityStats,
} from "../../components/useMock/UseMock";
import Activity from "../../components/graphics/Activity";

export default function Home() {
  const user = getUserByMockId(12);
  const userActivity = getActivityStats(12);

  return (
    <div className="homeContainer">
      <h1>Bonjour {user.userInfos.firstName}</h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
      <div className="activity-chart">
        <Activity data={userActivity.sessions} />
      </div>
    </div>
  );
}
