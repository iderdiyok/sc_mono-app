import ArrowDownIcon from "../Components/Icons_Component/ArrowDownIcon";

const BalanceCardEinnahmen = (props) => {

  const einnahmen = 
    props.profileWallet && Array.isArray(props.profileWallet.transactions) 
    ? props.profileWallet.transactions
      .filter(t => t.income === true)
      .map(t => t.amount)
      .reduce((sum, amount) => sum + amount, 0)
    : 0 
  return (
    <div>
      <p>
        <span>
          <ArrowDownIcon />
        </span>
        Einnahmen
      </p>
      <h4>{einnahmen.toFixed(2)} €</h4>
    </div>
  );
};

export default BalanceCardEinnahmen;
