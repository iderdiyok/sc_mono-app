import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { apiUrl } from "../api/api";
import { logo } from "../../public/img/man.png";

const LoginPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const [error, setError] = useState("")

const loginUser = (event) => {
  event.preventDefault()

  fetch( apiUrl + "/api/users/login", {
    method : "POST",
    headers: {"Content-Type": "application/json"},
    credentials: "include",
    body: JSON.stringify({email, password})
  })
  .then(response => response.json)
  .then( data => {
    if (!data.err) {
      props.loginSuccess(data.token)
      return
    }

  })
}

  return (
    <main className="login-page">
      <h1>Login</h1>
      <section className="from-container">
        <img src={logo} alt="logo" />
        <form>
          <label>
            E-Mail
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="E-Mail" />
          </label>
          <label>
            Passwort
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Passwort" />
          </label>
          <Link to="/home">
           <button className="btn-blue" type="submit" onClick={loginUser}>
            Login
          </button>
          </Link>
         
        </form>
      </section>
      <p>
        Du hast noch keinen Account?{" "}
        <span>
          {" "}
          <Link to="/registrieren">Hier Registrieren</Link>{" "}
        </span>
      </p>
    </main>
  );
};

export default LoginPage;
