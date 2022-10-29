import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Log_in from "./pages/Log_in";
import Services from "./pages/Services";
import Header from "./components/header";
import Home from './pages/Home.jsx';


function App ()  {
 return (
   <BrowserRouter>
   <Header />
      <Routes >
      <Route path="/" element={<Home/>}/>
         <Route path="/Products" element={<Products/>}/>
         <Route path="/Log_in" element={<Log_in/>}/>
         <Route path="/Services" element={<Services/>}/>
      </Routes>   
    </BrowserRouter>
 )
};
export default App;
