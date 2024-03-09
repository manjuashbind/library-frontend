
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

 import './App.css';
import Header from './Components/Header';
import Addbook from './Components/Addbook';
import Editbook from './Components/Editbook';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import Home from './Pages/Home';




function App() {
  return (
    
    <div className="App">    
   
   
         <Header/>
         
         <Routes>     
         <Route path='/' element={<Home/>}/>           
          <Route path='/add' element={<Addbook/>}/>
          <Route path='/edit/:id' element={<Editbook/>}/>
         <Route path="*" element={<PageNotFound />} />
               
         </Routes>

        <Footer />   
       
    
      
      </div>
      
    
   
  );
}

export default App;
