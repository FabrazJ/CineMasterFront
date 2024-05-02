import React from 'react';
import Seat from './js/Seat';
import CineMasterRoom from './js/CineMasterRoom'; // Corregido el camino de importación
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CineMasterRoom numberOfSeats={20} />
    </div>
  );
};

export default App;
