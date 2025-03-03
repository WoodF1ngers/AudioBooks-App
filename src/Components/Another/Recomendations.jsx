// // Recommendations.js
// import React, { useState, useEffect } from 'react';

// const Recommendations = ({ bookId }) => {
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         const fetchRecommendations = async () => {
//             const response = await fetch(`/api/books/${bookId}/recommendations`);
//             const data = await response.json();
//             setRecommendations(data);
//         };

//         fetchRecommendations();
//     }, [bookId]);

//     return (
//         <section>
//             <h2>Recomendaciones</h2>
//             <ul>
//                 {recommendations.map((rec) => (
//                     <li key={rec.id}>{rec.name}</li>
//                 ))}
//             </ul>
//         </section>
//     );
// };

// export default Recommendations;
