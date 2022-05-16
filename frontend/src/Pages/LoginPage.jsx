import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [useremail, setUseremail] = useState("")
  const [password, setPassword] = useState("")

  // const [error, setError] = useState("")

  return (
    <main className="login-page">
      <h1>Login</h1>
      <section className="from-container">
        <img src="./img/man.png" alt="logo" />
        <form>
          <label>
            E-Mail
            <input value={useremail} onChange={(e) => setUseremail(e.target.value)}  type="email" placeholder="E-Mail" />
          </label>
          <label>
            Passwort
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Passwort" />
          </label>
          <Link to="/home">
           <button className="btn-blue" type="submit">
            Login
          </button>
          </Link>
         
        </form>
      </section>
      <p>
        Du hast noch keinen Account?{" "}
        <span>
          {" "}
          <Link to="/regestrieren">Hier Registrieren</Link>{" "}
        </span>
      </p>
    </main>
  );
};

export default LoginPage;
