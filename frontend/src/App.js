import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
