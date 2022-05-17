import Navbar from "../Components/Navbar";
import HeaderLine from "../Components/HeaderLine";


import "./Statistik.css";
import TopAusgaben from "../Components/TopAusgaben";
import Diagramm from "../Components/Diagramm";
import { useState } from "react";

import { UserData } from "../Data";


const Statistik = () => {

const [userData, setUserData] = useState({
  labels: UserData.map((data) => data.year),
  datasets: [{
    label: "Einnahmen und ausgaben",
    data: UserData.map((data) => data.userGain),

  }]
})

  return (
    <main className="statistik">
      <HeaderLine title="Statistik" />
        <Diagramm chartData={userData}/>

  
      <TopAusgaben/>
      <Navbar />
    </main>
  );
};

export default Statistik;
