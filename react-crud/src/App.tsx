import React from 'react';
import './App.css';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Products from './admin/Products';


function App() {
  return (
    <div className="App">
    
      <Nav />

      <div className="container-fluid">
        <div className="row">
          <SideBar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
            <Routes>
              <Route path='/admin/products' element={<Products/>}/>
            </Routes>
            </BrowserRouter> 
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
