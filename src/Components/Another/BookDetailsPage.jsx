// // BookDetailsPage.js
// import React, { useContext, useEffect } from 'react';
// import { BookContext } from '../BookContext';
// import { useParams } from 'react-router-dom';
// import AudioPlayer from './Audioplayer';
// import SimilarTitles from './SimilarTitles';
// import Recommendations from './Recommendations';
// <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css"></link>
// import Footer from './Footer';

// const BookDetailsPage = () => {
//     const { id } = useParams();
//     const { selectedBook, setSelectedBook } = useContext(BookContext);

//     useEffect(() => {
//         // Simula la búsqueda de los datos del libro por ID
//         const fetchBookDetails = async (bookId) => {
//             const response = await fetch(`/api/books/${bookId}`);
//             const data = await response.json();
//             setSelectedBook(data);
//         };

//         fetchBookDetails(id);
//     }, [id, setSelectedBook]);

//     if (!selectedBook) {
//         return <div>Cargando...</div>;
//     }

//     return (
//         <div>
//             <header>
//                 {/* Header global */}
//             </header>
//             <main>
//                 <section>
//                     <img src={selectedBook.coverImage} alt={selectedBook.title} />
//                     <h1>{selectedBook.title}</h1>
//                     <p>{selectedBook.description}</p>
//                     <h2>Prólogo</h2>
//                     <p>{selectedBook.prologue}</p>
//                 </section>
//                 <section>
//                     <AudioPlayer src={selectedBook.audioSrc} />
//                 </section>
//                 <SimilarTitles bookId={selectedBook.id} />
//                 <Recommendations bookId={selectedBook.id} />
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default BookDetailsPage;
