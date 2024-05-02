import React from 'react';

const Seat = ({ id, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      className={`seat ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {id}
    </div>
  );
};

export default Seat;
