import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import SingUp from "./Pages/SingUp";
import Home from "./Pages/Home";
import Profil from "./Pages/Profile";
import Wallet from "./Pages/Wallet";
import Statistik from "./Pages/Statistik";
import TransactionDetailsExpense from "./Pages/TransactionDetailsExpense";
import TransactionDetailsIncome from "./Pages/TransactionDetailsIncome";
import AddExpense from "./Pages/AddExpense";
import AddIncome from "./Pages/AddIncome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regestrieren" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/statistik" element={<Statistik />} />

          <Route
            path="/einnahmen-details"
            element={<TransactionDetailsIncome />}
          />
          <Route
            path="/ausgaben-details"
            element={<TransactionDetailsExpense />}
          />

          <Route path="/ausgabe" element={<AddExpense />} />
          <Route path="/einnahme" element={<AddIncome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
