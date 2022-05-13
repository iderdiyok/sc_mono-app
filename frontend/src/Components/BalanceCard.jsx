import "./BalanceCard.css";

import DotsIcon from "../Components/Icons_Component/DotsIcon";

import BalanceCardEinnahmen from "./BalanceCardEinnahmen";
import BalanceCardAusgaben from "./BalanceCardAusgaben";

const BalanceCard = () => {
  return (
    <section className="card-wrapper">
      <article className="card-wrapper-header">
        <div>
          <h5>Totales Guthaben</h5>
          <h2>2540,50 €</h2>
        </div>
        <div>
          <DotsIcon />
        </div>
      </article>
      <article className="in-out">
       <BalanceCardEinnahmen />
       <BalanceCardAusgaben />
      </article>
    </section>
  );
};

export default BalanceCard;
