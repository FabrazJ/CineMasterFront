import React, { useState } from 'react';
import Seat from './Seat';

const CineMasterRoom = ({ numberOfSeats }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="cinema-room">
      <h2>Reserva de Butacas de Cine</h2>
      <div className="seats">
        {[...Array(numberOfSeats)].map((_, index) => (
          <Seat
            key={index}
            id={index + 1}
            selected={selectedSeats.includes(index + 1)}
            onSelect={handleSeatSelect}
          />
        ))}
      </div>
      <p>Butacas seleccionadas: {selectedSeats.join(', ')}</p>
    </div>
  );
};

export default CineMasterRoom;
