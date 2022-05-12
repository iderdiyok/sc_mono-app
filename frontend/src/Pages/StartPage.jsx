import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <main>
      <img src="./img/Man.png" alt="" />
      <h1>Spend Smarter</h1>
      <h1>Save More</h1>
      <Link to="/login" className="btn-blue" >
        Get Started
      </Link>

      <p>
        Already Have An Account? <link rel="stylesheet" href="Log In" />
      </p>
    </main>
  );
};

export default StartPage;
