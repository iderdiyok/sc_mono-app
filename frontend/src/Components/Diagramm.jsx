import "./Diagramm.css"
import React from "react";

import { Line } from "react-chartjs-2";

const Diagramm = ({chartData}) => {
  
  return (
    <section className="diagram">
     <article>
            <Line data={chartData} />
     </article>
    </section>
  );
};

export default Diagramm;
