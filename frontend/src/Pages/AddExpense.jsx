import "./AddExpense.css";

import HeaderLine from "../Components/HeaderLine";
import AddPhotoBtn from "../Components/AddPhotoBtn";
import Navbar from "../Components/Navbar";

const AddIncome = () => {
  return (
    <main className="add-expense">
      <HeaderLine title="Ausgabe hinzufügen" />
      <section>
        <form>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Betrag
            <input type="number" />
          </label>
          <label>
            Datum
            <input type="date" />
          </label>
          <AddPhotoBtn label="Foto Hinzufügen" text="Foto Hinzufügen" />
          
          <button type="submit" className="btn-blue">
            Speichern
          </button>
        </form>
      </section>
      <Navbar />
    </main>
  );
};

export default AddIncome;
