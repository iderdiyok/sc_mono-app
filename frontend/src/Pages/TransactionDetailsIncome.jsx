import "./TransactionDetailsIncome.css";
import HeaderLine from "../Components/HeaderLine";
import Navbar from "../Components/Navbar";

const TransactionDetailsExpense = () => {
  return (
    <main className="trans-detail-wrapper-Income">
      <section className="header-section">
        <HeaderLine title="Transaction Details" />
      </section>
      <div className="wrapper-inner">
        <section className="top">
          <div className="center">
            <h2>C</h2>
          </div>
          <p className="green"> Einnahme</p>
          <h3>1500,00 €</h3>
        </section>

        <section>
          <h4>Transaction Details</h4>
          <article>
            <ul>
              <li>
                <p>Status</p> <h5 className="green">Einnahme</h5>
              </li>
              <li>
                <p>Name</p> <h5>Gehalt Mai</h5>
              </li>
              <li>
                <p>Zeit</p> <h5>14:05</h5>
              </li>
              <li>
                <p>Datum</p> <h5>22.05.2022</h5>
              </li>
              <hr />
              <li>
                <p>Beitrag</p> <h5>1500 €</h5>
              </li>
              <hr />
              <li>
                <p>Total</p> <h5>1500 €</h5>
              </li>
            </ul>
            
          </article>
      
       
        </section>
        <button>Bearbeiten</button>
      </div>
      <Navbar/>
    </main>
  );
};

export default TransactionDetailsExpense;
