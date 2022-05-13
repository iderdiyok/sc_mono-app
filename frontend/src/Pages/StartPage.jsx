import { Link } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  return (
    <main>
      <img src="./img/Man_background.png" alt="" />
      <h1>Spend Smarter</h1>
      <h1 className="space">Save More</h1>
      <Link to="/login" className="btn-blue">
        Get Started
      </Link>

      <p>
        Du hast noch keinen Account?{" "}
        <Link to="/regestrieren">Hier Regestrieren!</Link>
      </p>
    </main>
  );
};

export default StartPage;
