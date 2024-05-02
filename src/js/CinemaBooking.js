import React, { useState } from 'react';
import Seat from './Seat'; // Importa el componente Seat

const CinemaBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Datos simulados de películas disponibles
  const [movies] = useState([
    { id: 1, title: 'El Conjuro', genre: 'Terror', availableDates: ['2024-05-10', '2024-05-12', '2024-05-15'] },
    { id: 2, title: 'It', genre: 'Terror', availableDates: ['2024-05-11', '2024-05-13', '2024-05-16'] },
    { id: 3, title: 'Jurassic Park', genre: 'Aventura', availableDates: ['2024-05-10', '2024-05-12', '2024-05-15'] },
    // Agrega más películas con diferentes géneros si lo deseas
  ]);

  // Estado para el género seleccionado
  const [selectedGenre, setSelectedGenre] = useState('Terror');

  // Función para manejar la selección de asientos
  const handleSeatSelect = (seatId) => {
    // Implementa la lógica para seleccionar asientos como se mostró en el ejemplo anterior
  };

  // Función para manejar la reserva de butacas
  const handleReservation = () => {
    // Implementa la lógica para realizar la reserva como se mostró en el ejemplo anterior
  };

  // Función para manejar el cambio de género
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setSelectedMovie(null); // Reinicia la película seleccionada al cambiar de género
  };

  // Función para manejar la selección de película
  const handleMovieSelect = (movieId) => {
    setSelectedMovie(movies.find(movie => movie.id === movieId));
  };

  // Filtra las películas por el género seleccionado
  const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="cinema-booking">
      <h2>Reserva de Butacas de Cine</h2>
      
      {/* Selección de género */}
      <div className="form-group">
        <label htmlFor="genre">Género:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="Terror">Terror</option>
          <option value="Aventura">Aventura</option>
          {/* Agrega más opciones de género si lo deseas */}
        </select>
      </div>
      
      {/* Selección de película */}
      <div className="movies-list">
        <h3>Selecciona una Película:</h3>
        <ul>
          {filteredMovies.map((movie, index) => (
            <li key={index} onClick={() => handleMovieSelect(movie.id)}>
              <b>{movie.title}</b> - Fechas Disponibles: {movie.availableDates.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      {/* Mostrar detalles de la película seleccionada */}
      {selectedMovie && (
        <div className="selected-movie">
          <h3>Detalles de la Película:</h3>
          <p><strong>Título:</strong> {selectedMovie.title}</p>
          <p><strong>Género:</strong> {selectedMovie.genre}</p>
          <p><strong>Fechas Disponibles:</strong> {selectedMovie.availableDates.join(', ')}</p>
        </div>
      )}

      {/* Selección de asientos y botón de reserva */}
      <div className="seats">
        {/* Aquí puedes mostrar los asientos disponibles */}
      </div>
      <button onClick={handleReservation} disabled={!selectedMovie}>Reservar</button>
    </div>
  );
};

export default CinemaBooking;

