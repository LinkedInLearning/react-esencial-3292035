

import React, { useState, useEffect, createContext } from 'react';
import './App.css';


import ListaProductos from './components/ListaProductos';
import ListaCarrito from './components/ListaCarrito';
import { DataProvider } from './components/DataContext';


function App() {


  return (
    <>

      <div className="row">

        <DataProvider>
          <ListaProductos  />
          <ListaCarrito />
        </DataProvider>

        

      </div>
    </>

  )
}

export default App
