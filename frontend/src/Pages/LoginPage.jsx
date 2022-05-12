import "./LoginPage.css";
import {Link} from "react-router-dom"


const LoginPage = () => {
  return (
    <main className="login-page">
      <h1>Login</h1>
      <section className="from-container">
        <img src="./img/man.png" alt="logo" />
        <form>
          <label>
            E-Mail
            <input type="text" placeholder="E-Mail" />
          </label>
          <label>
            Passwort
            <input type="password" placeholder="Passwort" />
          </label>
          <button className="btn-blue" type="submit">
            Login
          </button>
        </form>
      </section>
      <p>
        Du hast noch keinen Account? <span> <Link to="/regestrieren">Hier Registrieren</Link> </span>
      </p>
    </main>
  );
};

export default LoginPage;
