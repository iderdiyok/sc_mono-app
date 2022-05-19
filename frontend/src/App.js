import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import SingUp from "./Pages/SingUp";
import Home from "./Pages/Home";
import Profil from "./Pages/Profile";
import Wallet from "./Pages/Wallet";
import Statistik from "./Pages/Statistik";
import AddExpense from "./Pages/AddExpense";
import AddIncome from "./Pages/AddIncome";
import TransactionDetails from "./Pages/TransactionDetails";
import { useState } from "react";
import AuthRequired from "./Components/AuthRequired";

function App() {
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  const loginSuccess = (token) => {
    setToken(token)
    navigate("/home")
  }
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage loginSuccess={loginSuccess}/>} />
          <Route path="/registrieren" element={<SingUp />} />
          <Route path="/home" 
            element={
              <AuthRequired token={token} setToken={setToken}>
                <Home token={token}/>
              </AuthRequired>
            } 
          />
          <Route path="/profil" element={<Profil />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/statistik" element={<Statistik />} />

          {/* <Route
            path="/transactions-details/:transactionId"
            element={<TransactionDetailsIncome token={token}/>}
          /> */}
          <Route
            path="/transactions-details/:transactionId"
            element={<TransactionDetails token={token}/>}
          />

          <Route path="/ausgabe" element={<AddExpense token={token}/>} />
          <Route path="/einnahme" element={<AddIncome token={token}/>} />
        </Routes>
      </div>
  );
}

export default function AppRouter(){
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
