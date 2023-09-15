import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="favs" element={<Favs/>} />
          <Route path="contact" element={<Contact/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)