import "./SingUp.css";
import { Link } from "react-router-dom";

import AddButtonIcon from "../Components/AddPhotoBtn";

const SingUp = () => {
  return (
    <main className="singup-page">
      <h1>Registrieren</h1>
      <section className="from-container">
        <form>
          <label>
            Name
            <input type="text" placeholder="Name" />
          </label>
          <label>
            E-Mail
            <input type="text" placeholder="E-Mail" />
          </label>
          <label>
            Passwort
            <input type="password" placeholder="Passwort" />
          </label>
          <AddButtonIcon />

          <button className="btn-blue" type="submit">
            Registrieren
          </button>
        </form>
      </section>
      <p>
        Du hast bereits einen Account?{" "}
        <span>
          {" "}
          <Link to="/login">Hier Login</Link>{" "}
        </span>
      </p>
    </main>
  );
};

export default SingUp;
