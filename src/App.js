import React from 'react'
//import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Homes from './components/Day09/Homes'
import About from './components/Day09/About'
 import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
return (

<BrowserRouter>
   <nav>
    <Link to='/homes'>Homes</Link>
    <Link to='/about'>About</Link>
   </nav>

   <Routes>
    <Route path='/' element={<Homes></Homes>}></Route>
    <Route path='/about' element={<About></About>}></Route>
   </Routes>

</BrowserRouter>

  );
}


export default App;
