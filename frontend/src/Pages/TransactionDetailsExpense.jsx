import "./TransactionDetailsExpense.css";
import HeaderLine from "../Components/HeaderLine";
import Navbar from "../Components/Navbar";

const TransactionDetailsExpense = () => {
  return (
    <main className="trans-detail-wrapper-expense">
      <section className="header-section">
        <HeaderLine title="Transaction Details" />
      </section>
      <div className="wrapper-inner">
        <section className="top">
          <div className="center">
            <h2>C</h2>
          </div >
          <p className="red rot"> Ausgabe</p>
          <h3>15,40 €</h3>
        </section>

        <section>
          <h4>Transaction Details</h4>
          <article>
            <ul>
              <li>
                <p>Status</p> <h5 className="red">Ausgabe</h5>
              </li>
              <li>
                <p>Name</p> <h5>Claire Jovalski</h5>
              </li>
              <li>
                <p>Zeit</p> <h5>14:05</h5>
              </li>
              <li>
                <p>Datum</p> <h5>22.05.2022</h5>
              </li>
              <hr />
              <li>
                <p>Beitrag</p> <h5>15,40 €</h5>
              </li>
              <hr />
              <li>
                <p>Total</p> <h5>15,40 €</h5>
              </li>
            </ul>
            
          </article>
          <p className="photo-label">Foto</p>
          <img src="../img/quittung.jpeg" alt="" />
        </section>
        <button>Bearbeiten</button>
      </div>
      <Navbar/>
    </main>
  );
};

export default TransactionDetailsExpense;
