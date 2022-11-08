import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Log_in from "./pages/Log_in";
import Services from "./pages/Services";
import Header from "./components/header";
import Home from "./pages/Home.jsx";
import Footer from "./pages/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
export const darkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Log_in" element={<Log_in />} />
          <Route path="/Services" element={<Services />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </darkModeContext.Provider>
  );
}
export default App;
