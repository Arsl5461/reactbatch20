import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards";
import "./style.css"
import {Routes,Route} from "react-router-dom"
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/cards/:id" element={<ProductDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>


      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
