import "./TransactionHistoryList.css";

import { Link } from "react-router-dom";

const TransactionHistoryList = () => {
  return (
    <section className="trans-list">
      <article className="list-header">
        <h4>Transaktionen Historie</h4>
        <Link to="#">See all</Link>
      </article>
      <article className="list-body">
        <div className="list-item">
          <div className="list-icon-name">
            <div className="icon-list center">
              <h4>LO</h4>
            </div>
            <div>
              <h5>Name</h5>
              <p>25.05.2022</p>
            </div>
          </div>
          <div className="betrag">
            <h4>+ 85.50 €</h4>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TransactionHistoryList;
