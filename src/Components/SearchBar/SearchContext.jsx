// src/Components/Searchbar/SearchContext.jsx
import React, { createContext, useState } from 'react';
import { audiobooks } from '../Another/DataBase'; // Asegúrate de que la ruta sea correcta

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const searchItems = (query) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
  
    const results = audiobooks.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchResults, searchItems }}>
      {children}
    </SearchContext.Provider>
  );
};

