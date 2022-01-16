import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
