import "./AddExpense.css";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import HeaderLine from "../Components/HeaderLine";
import AddPhotoBtn from "../Components/AddPhotoBtn";
import Navbar from "../Components/Navbar";
import { apiUrl } from "../api/api";

const AddExpense = (props) => {

  // const [picture, setPicture] = useState()
    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)
    const [created_at, setCreated_at] = useState()

    const navigate = useNavigate()

    const addExpense = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.set("name", name)
        formData.set("amount", amount)
        formData.set("created_at", created_at)
        formData.set("income", false)

        fetch(apiUrl + "/api/transactions/add", {
            method: "POST",
            headers: {
                token: "JWT " + props.token
            },
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            if(data._id) {
                navigate("/home")
            }
        })
    }

  return (
    <main className="add-expense">
      <div className="header">
         <HeaderLine title="Ausgabe hinzufügen" />
      </div>
     
      <section>
        <form>
          <label>
            Name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Betrag
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </label>
          <label>
            Datum
            <input type="datetime-local" value={created_at} onChange={(e) => setCreated_at(e.target.value)}/>
          </label>
          <AddPhotoBtn label="Foto Hinzufügen" text="Foto Hinzufügen" />
          
          <button type="submit" className="btn-blue" onClick={addExpense}>
            Speichern
          </button>
        </form>
      </section>
      <Navbar />
    </main>
  );
};

export default AddExpense;
