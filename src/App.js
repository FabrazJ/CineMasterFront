import React from 'react';
import Seat from './js/Seat';
import CineMasterRoom from './js/CineMasterRoom'; // Corregido el camino de importación
import CinemaBooking from './js/CinemaBooking';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CineMasterRoom numberOfSeats={20} />
      <CinemaBooking /> {/* Integra el componente CinemaBooking en App */}

    </div>
  );
};

export default App;
