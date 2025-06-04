import React from "react";
import "./styles.scss";
import { getUserByMockId } from "../../components/useMock/UseMock";

export default function Home() {
  const user = getUserByMockId();

  return (
    <div className="homeContainer">
      <h1>Bonjour {user.userInfos.firstName}</h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}
