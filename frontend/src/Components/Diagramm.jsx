import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Diagramm = ({chartData}) => {
  return (
    <section>
     <article>
            <Bar data={chartData} />
     </article>
    </section>
  );
};

export default Diagramm;
