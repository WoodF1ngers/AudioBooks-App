import React from 'react';
import { audiobooks } from './Another/DataBase';
import './Styles/CategoryCard.css';

const getRandomCovers = (books, count) => {
  // Mezclar el array
  const shuffled = books.sort(() => 0.5 - Math.random());
  // Obtener los primeros 'count' elementos
  return shuffled.slice(0, count);
};

const CategoryCard = ({ categoryId, categoryName }) => {
  // Filtrar audiolibros por categoría
  const filteredBooks = audiobooks.filter(book => book.categoryId === categoryId);
  // Obtener hasta 5 portadas aleatorias
  const covers = getRandomCovers(filteredBooks, 5);

  return (
    <div className="category-card">
      <div className='titleCard'>
        <h2>{categoryName}</h2>
      </div>
      <hr />
      <div className="covers-container">
        {covers.map((book) => (
          <img key={book.id} src={book.coverUrl} alt={book.title} className="cover-image" />
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
