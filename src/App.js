import logo from './logo.svg';
import './App.css';
import Home from "./view/home";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Axios from "./view/axios";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/axios'>Axios</Link>
      </nav>
      <header>-------------------</header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/axios' element={<Axios/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
