import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/Footer/Footer";
import { Menu } from "./components/pages/Menu";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
