import "./App.css";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";
import { Page03 } from "./pages/Page03";
import { Page04 } from "./pages/Page04";

function App() {
  return (
    <div>
      <h1>Clase de react</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Page01/>} />
          <Route path="/javaScript" element={<Page02/>} />
          <Route path="/desing" element={<Page03/>} />
          <Route path="/extra info" element={<Page04/>} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
