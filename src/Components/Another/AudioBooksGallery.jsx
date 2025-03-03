// // HomePage.js
// import React, { useContext } from 'react';
// import { BookContext } from './BookContext';
// import { Link } from 'react-router-dom';
// <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css"></link>

// const AudiolibrosPage = () => {
//     const { setSelectedBook } = useContext(BookContext);

//     const books = [
//         // Lista de libros simulada
//         { id: 1, title: 'El Principito', coverImage: 'src/assets/BooksCovers/elPrincipito.png' },
//         { id: 2, title: 'Libro 2', coverImage: '/images/book2.jpg' },
//         // Más libros...
//     ];

//     const handleBookClick = (book) => {
//         setSelectedBook(book);
//     };

//     return (
//         <div>
//             <h1>Biblioteca de Audiolibros</h1>
//             <ul>
//                 {books.map((book) => (
//                     <li key={book.id}>
//                         <Link to={`/book/${book.id}`} onClick={() => handleBookClick(book)}>
//                             <img src={book.coverImage} alt={book.title} />
//                             <p>{book.title}</p>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default AudiolibrosPage;
