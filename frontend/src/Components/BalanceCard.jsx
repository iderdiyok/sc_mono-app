import "./BalanceCard.css";

import DotsIcon from "../Components/Icons_Component/DotsIcon";

import BalanceCardEinnahmen from "./BalanceCardEinnahmen";
import BalanceCardAusgaben from "./BalanceCardAusgaben";

const BalanceCard = (props) => {

  const ausgaben = 
    props.profileWalletAll && Array.isArray(props.profileWalletAll.transactions) 
    ? props.profileWalletAll.transactions
      .filter(t => t.income === false)
      .map(t => t.amount)
      .reduce((sum, amount) => sum + amount, 0)
    : 0 

    const einnahmen = 
    props.profileWalletAll && Array.isArray(props.profileWalletAll.transactions) 
    ? props.profileWalletAll.transactions
      .filter(t => t.income === true)
      .map(t => t.amount)
      .reduce((sum, amount) => sum + amount, 0)
    : 0 

    const totalBalance = einnahmen - ausgaben
  return (
    <section className="card-wrapper">
      <article className="card-wrapper-header">
        <div>
          <h5>Totales Guthaben</h5>
          <h2>{props.profileWalletAll ? totalBalance.toFixed(2) : 0} €</h2>
        </div>
        <div>
          <DotsIcon />
        </div>
      </article>
      <article className="in-out">
       <BalanceCardEinnahmen profileWallet={props.profileWalletMonth}/>
       <BalanceCardAusgaben profileWallet={props.profileWalletMonth}/>
      </article>
    </section>
  );
};

export default BalanceCard;
