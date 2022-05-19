import Navbar from "../Components/Navbar";
import HeaderLine from "../Components/HeaderLine";

import "./Statistik.css";
import TopAusgaben from "../Components/TopAusgaben";
import Diagramm from "../Components/Diagramm";
import { useState } from "react";

import { UserData } from "../Data";
// import { ContextProvider } from "react-chat-engine";

const Statistik = () => {
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
    
    <main className="statistik">
      <HeaderLine title="Statistik" />

      <Diagramm chartData={userData} />

      <TopAusgaben />
      <Navbar />
    </main>
  );
};

export default Statistik;
