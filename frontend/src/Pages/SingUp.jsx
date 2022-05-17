import "./SingUp.css";
import { Link } from "react-router-dom";

import AddButtonIcon from "../Components/AddPhotoBtn";
import { useState } from "react";
import { apiUrl } from "../api/api";

const SingUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const register = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(apiUrl + "/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })
      const result = await response.json
      console.log("result", result);
      if (result.error) {
        console.log("error in signup fetch react", result.error);
        setError(result.error)
      } else if (result.acknowledged === true && result.insertedId) {
        setSuccess("account created successfuly, please login")
        setError("")
        setName("")
        setEmail("")
        setPassword("")
      }
    } catch (error) {
      console.log("error ", error);
      setError("problem with accout registretion")
    }
  }

  return (
    <main className="singup-page">
      <h1>Registrieren</h1>
      <section className="from-container">
        <form>
          <label>
            Name
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            E-Mail
            <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Passwort
            <input type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          {/* upload photo */}
          <AddButtonIcon label="User Foto" text="Foto Hinzufügen" />

          <button className="btn-blue" onClick={register} type="submit">
            Registrieren
          </button>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
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
