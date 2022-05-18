import "./TransactionHistoryList.css";

import { Link } from "react-router-dom";

const TransactionHistoryList = (props) => {

  return (
    <section className="trans-list">
      <article className="list-header">
        <h4>Transaktionen Historie</h4>
        <Link to="#">See all</Link>
      </article>
      { props.profileWallet && Array.isArray(props.profileWallet.transactions)
        ?        
        props.profileWallet.transactions.map(t => 
          <article className="list-body">
          <Link to="/ausgaben-details">
            <div className="list-item">
              <div className="list-icon-name">
                <div className="icon-list center">
                  <h3 >{t.name.charAt(0)}</h3>
                </div>
                <div>
                  <h5>{t.name}</h5>
                  <p>{new Date(t.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="betrag">
                <h4 className={!t.income ? "red" : "green"}>{!t.income ? "- " + t.amount.toFixed(2) : "+ " + t.amount.toFixed(2)} €</h4>
              </div>
            </div>
          </Link>
        </article>
        )
       :
       <article>
      <Link to="/ausgaben-details">
        <div className="list-item">
          <div className="list-icon-name">
            <div className="icon-list center">
              <h3>C</h3>
            </div>
            <div>
              <h5>Claire Jovalski</h5>
              <p>25.05.2022</p>
            </div>
          </div>
          <div className="betrag">
            <h4>- 15,40 €</h4>
          </div>
        </div>
        </Link>
     
      </article>   
      }
        
      
    </section>
  );
};

export default TransactionHistoryList;
