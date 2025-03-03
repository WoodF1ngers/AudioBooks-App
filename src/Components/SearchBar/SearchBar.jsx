// import React, { useState, useContext } from 'react';
// import Modal from 'react-modal';
// import { SearchContext } from '../../contexts/SearchContext'; // Ajusta la ruta según tu estructura de proyecto
// import '../Styles/searchbar/SearchBar.css';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const { searchResults, searchItems } = useContext(SearchContext);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     searchItems(value);
//     setModalIsOpen(value.trim() !== '');
//   };

//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="searchbar-container">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search for audiobooks..."
//         className="searchbar-input"
//       />
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={handleCloseModal}
//         className="searchbar-modal"
//         overlayClassName="searchbar-overlay"
//       >
//         <ul className="search-results">
//           {searchResults.map((item) => (
//             <li key={item.id} className="search-result-item">
//               <img src={item.coverUrl} alt={item.title} className="result-image" />
//               <div className="result-details">
//                 <h3>{item.title}</h3>
//                 <p>{item.author}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </Modal>
//     </div>
//   );
// };

import React, { useContext, useState } from 'react';
import { SearchContext } from './SearchContext';
import { Link } from 'react-router-dom';
import { RiSearch2Line } from "react-icons/ri"; // Importamos el ícono de la lupa
import '../Styles/searchbar/SearchBar.css'; 

const SearchBar = () => {
  const { searchResults, searchItems } = useContext(SearchContext);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    searchItems(searchQuery);
    setIsModalOpen(searchQuery.trim() !== '');
  };

  const handleSelectResult = () => {
    // Reseteamos el valor del input y ocultamos el modal al seleccionar un resultado
    setQuery('');
    setIsModalOpen(false);
  };

  return (
    <div className="search-bar-container">
      <div className="search-icon-container">
      <RiSearch2Line size={40} className="search-icon" color='#fff' />
        <input
          type="text"
          placeholder="Busca por títulos, autores, o cat..."
          value={query}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      {isModalOpen && ( // Mostrar el modal solo si isModalOpen es true
        <div className="search-results-container">
          {searchResults.map((result) => (
            <Link
              to={`/audiolibros/${result.id}`}
              key={result.id}
              className="search-result-item"
              onClick={handleSelectResult} // Agregamos el manejador de eventos para restablecer el modal
            >
              {result.coverUrl && (
                <img src={result.coverUrl} alt={result.title} className="result-image" />
              )}
              <div className="result-details">
                <strong>{result.title}</strong>
                <span>{result.author}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

