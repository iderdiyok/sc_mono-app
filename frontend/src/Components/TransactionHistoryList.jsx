import "./TransactionHistoryList.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const TransactionHistoryList = () => {
  // const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9000/api/transactions/")
  //     .then((response) => response.json())
  //     .then((TransactData) => setHistory(TransactData));
  // }, []);


  return (
    <section className="trans-list">
      <article className="list-header">
        <h4>Transaktionen Historie</h4>
        <Link to="#">See all</Link>
      </article>
      <article className="list-body">
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
              <h4>- 15,40</h4>
            </div>
          </div>
        </Link>
      </article>
    </section>
  );
};

export default TransactionHistoryList;
