import "./TopAusgaben.css";
import FilterIcon from "../Components/Icons_Component/FilterIcon";
import { Link } from "react-router-dom";


const TopAusgaben = () => {
  return (
    <section className="ausgaben-list">
      <article>
        <h4>Top Ausgaben</h4>
        <FilterIcon />
      </article>
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
    </section>
  );
};

export default TopAusgaben;
