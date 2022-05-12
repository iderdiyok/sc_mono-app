import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./Pages/StartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
