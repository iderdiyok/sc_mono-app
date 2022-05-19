import "./StatistikSection.css";

import Diagramm from "./Diagramm";

import { useState } from "react";

import { UserData } from "../Data";
import { ContextProvider } from "react-chat-engine";

const test = (value) => {
    console.log("test", value)
}

const StatistikSection = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),

    datasets: [
      {
        label: "Ausgaben und Einnahmen",

        data: UserData.map((data) => data.userGain),
        fill: true,
        backgroundColor: "#2b47fc42",
        borderColor: "#2b47fc",
        tension: 0.4,
        radius: 5,
        hoverRadius: 10,
        pointBackgroundColor: "#2b47fc",
        borderWidth: 2,
      },
    ],
  });

  return (
    <section>
      <div className="navigation-stat">
        <p>Woche</p>
        <p className="selected-time">Monat</p>
        <p>Jahr</p>
      </div>

      <div>
        <select onChange={ () =>{test(this.value)} } className="select-start">
          <option value="income">Einnahmen</option>
          <option value="expens">Ausgaben</option>
        </select>
      </div>

      <Diagramm chartData={userData} />
    </section>
  );
};

export default StatistikSection;
