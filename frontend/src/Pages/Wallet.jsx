import "./Wallet.css";

import Navbar from "../Components/Navbar";
import TransactionHistoryList from "../Components/TransactionHistoryList";
 

import PlusIcon from "../Components/Icons_Component/PlusIcon";
import SendIcon from "../Components/Icons_Component/SendIcon";
import QRIcon from "../Components/Icons_Component/QrCodeIcon";
import HeaderLine from "../Components/HeaderLine";

const Wallet = () => {
  return (
    <main className="wallet">
      <section className="header-section">
        <HeaderLine title="Wallet" />
      </section>
      <div className="wrapper-inner">
        <section className="total-balance">
          <p>Totaler Beitrag</p>
          <h3>2540,00 €</h3>
          <article>
            <div>
              <div className="icon-wrapper center">
                <PlusIcon />
              </div>

              <p>Hinzufügen</p>
            </div>
            <div>
              <div className="icon-wrapper center">
                <QRIcon />
              </div>

              <p>Zahlen</p>
            </div>
            <div>
              <div className="icon-wrapper center">
                <SendIcon />
              </div>

              <p>Geld Senden</p>
            </div>
          </article>
        </section>
        <section>
            <TransactionHistoryList />
        </section>
      </div>

      <Navbar />
    </main>
  );
};

export default Wallet;
<main></main>;
