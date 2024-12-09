import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import VissionMission from "./Components/VissionMission/VissionMission";
import FirstPage from "./Components/FirstPage/FirstPage";
import CableService from "./Components/CableService/CableService";
import Internet from "./Components/Internet/Internet";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vissionmission" element={<VissionMission />}></Route>
        <Route path="/firstpage" element={<FirstPage />}></Route>
        <Route path="/cabelservices" element={<CableService />}></Route>
        <Route path="/internet" element={<Internet />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
