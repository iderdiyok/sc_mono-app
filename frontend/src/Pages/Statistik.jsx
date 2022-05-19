import Navbar from "../Components/Navbar";
import HeaderLine from "../Components/HeaderLine";

import "./Statistik.css";
import TopAusgaben from "../Components/TopAusgaben";
import StatistikSection from "../Components/StatistikSection";

const Statistik = () => {

  

  
  return (
    
    <main className="statistik">
      <HeaderLine title="Statistik" />
      
      <StatistikSection />

      <TopAusgaben />
      <Navbar />
    </main>
  );
};

export default Statistik;
