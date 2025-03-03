// src/assets/Pages/Audiolibros.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { audiobooks } from '../../Components/Another/DataBase';
import { IoHeadset } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa";
import '../../Components/Styles/Audiolibros.css';
import Menu from '../../Components/HomePage/Menu';
import Footer from '../../Components/HomePage/Footer';
import RecentAudiobooks from '../../Components/Cards/HorizontalScroll/RecentAudiobooks'

const iconMap = {
  IoHeadset: IoHeadset,
  FaGlasses: FaGlasses,
};

const Audiolibros = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(10); // Estado para el número de títulos visibles

  const handleSelectAudiobook = (id) => {
    navigate(`/audiolibros/${id}`);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 10); // Incrementa el número de títulos visibles en 10
  };

  return (
    <>
      <Menu />
      <div className="audiolibros-page">
        <h1>Audiolibros</h1>
        <p className='audiolibros-page-p'>
          Sumérgete en un universo de sonidos y palabras con nuestra colección de audiolibros.
          Siempre estarán listos para acompañarte en cada momento.
        </p>
        <div className='audiobookGalleryTitle'>
          <img src="./OIG3 (3).jpeg" alt="" />
        </div>
        <div className="audiobook-list">
          {audiobooks.slice(0, visibleCount).map((audiobook) => (
            <div
              key={audiobook.id}
              className="audiobook-item"
              onClick={() => handleSelectAudiobook(audiobook.id)}
            >
              <img src={audiobook.coverUrl} alt={audiobook.title} />
              <h2>{audiobook.title}</h2>
              <p>{audiobook.author}</p>
              <span>
                {audiobook.media.map((iconName) => {
                  const MediaIcon = iconMap[iconName];
                  return MediaIcon && <MediaIcon key={iconName} />;
                })}
              </span>
            </div>
          ))}
        </div>
        {visibleCount < audiobooks.length && ( // Muestra el botón solo si hay más títulos para mostrar
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="load-more-button">Cargar más</button>
          </div>
        )}
      </div>
      <RecentAudiobooks />
      <Footer />
    </>
  );
};

export default Audiolibros;
