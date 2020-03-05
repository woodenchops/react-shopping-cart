import React from 'react';
import './App.css';
import ShoppingComponent from './components/ShoppingComponent';
import ShoppingProvider from './contexts/ShoppingContext';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
     <ShoppingProvider>
        <ShoppingComponent/>
        <ShoppingCart/>
     </ShoppingProvider>
    </div>
  );
}

export default App;
