import "./BalanceCard.css";

import DotsIcon from "../Components/Icons_Component/DotsIcon";

import BalanceCardEinnahmen from "./BalanceCardEinnahmen";
import BalanceCardAusgaben from "./BalanceCardAusgaben";

const BalanceCard = (props) => {
  return (
    <section className="card-wrapper">
      <article className="card-wrapper-header">
        <div>
          <h5>Totales Guthaben</h5>
          <h2>{props.profileWallet ? props.profileWallet.totalBalance.toFixed(2) : 0} €</h2>
        </div>
        <div>
          <DotsIcon />
        </div>
      </article>
      <article className="in-out">
       <BalanceCardEinnahmen profileWallet={props.profileWallet}/>
       <BalanceCardAusgaben profileWallet={props.profileWallet}/>
      </article>
    </section>
  );
};

export default BalanceCard;
