import "./AddIncome.css";

import HeaderLine from "../Components/HeaderLine";
import AddPhotoBtn from "../Components/AddPhotoBtn";

const AddIncome = () => {
  return (
    <main className="add-income">
      <HeaderLine title="Einnahme hinzufügen" />
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
    </main>
  );
};

export default AddIncome;
