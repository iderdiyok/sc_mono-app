import "./TopAusgaben.css";
import FilterIcon from "../Components/Icons_Component/FilterIcon";
import { Link } from "react-router-dom";


const TopAusgaben = (props) => {
  return (
    <section className="ausgaben-list">
      <article>
        <h4>Top Ausgaben</h4>
        <FilterIcon />
      </article>
      <article>
        {props.transactionData?.filterAllTransaction?.map( t => 
            <Link to={"/transactions-details/" + t._id}>
            <div className="list-item">
              <div className="list-icon-name">
                <div className="icon-list center">
                  <h3>{t.name.charAt(0)}</h3>
                </div>
                <div>
                  <h5>{t.name}</h5>
                  <p>{new Date(t.created_at).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
              </div>
              <div className="betrag">
              <h4 className={!t.income ? "red" : "green"}>{(!t.income ? "- " : "+ ") + t.amount.toFixed(2) } €</h4>
              </div>
            </div>
            </Link>
          ) }
      </article>
    </section>
  );
};

export default TopAusgaben;
