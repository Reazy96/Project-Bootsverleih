import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BootDetail from "./pages/BootDetail/BootDetail";
import BootsUebersicht from "./pages/BootsUebersicht/BootsUebersicht";
import ReservierungsUebersicht from "./pages/ReservierungsUebersicht/ReservierungsUebersicht";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boote" element={<BootsUebersicht />} />
        <Route path="/boote/:bootId" element={<BootDetail />} />
        <Route path="/reservierung" element={<ReservierungsUebersicht />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
