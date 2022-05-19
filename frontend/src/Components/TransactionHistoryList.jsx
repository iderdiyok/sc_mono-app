import "./TransactionHistoryList.css";

import { Link } from "react-router-dom";
import Loading from "./Loading";

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
          <article key={t._id} className="list-body">
          <Link to={"/transactions-details/" + t._id}>
            <div className="list-item">
              <div className="list-icon-name">
                <div className="icon-list center">
                  <h3 >{t.name.charAt(0)}</h3>
                </div>
                <div>
                  <h5>{t.name}</h5>
                  <p>{new Date(t.created_at).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
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
        <Loading />
      }
        
      
    </section>
  );
};

export default TransactionHistoryList;
