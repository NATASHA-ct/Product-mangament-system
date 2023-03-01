import React from 'react';
import{BrowserRouter, Routes ,Route} from 'react-router-dom';
import Productlist from './components/Productlist/Productlist';
import Addproduct from './components/AddProduct/Addproduct';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/add-product" element={<Addproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
