// RecentAudiobooks.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import { audiobooks } from '../../Another/DataBase';
import { IoHeadset } from 'react-icons/io5';
import { FaGlasses } from 'react-icons/fa';
import './Styles/RecentAudiobooks.css'; // Ajusta la ruta según tu estructura de archivos

const iconMap = {
  IoHeadset: IoHeadset,
  FaGlasses: FaGlasses,
};

const RecentAudiobooks = () => {
  const recentAudiobooks = audiobooks.slice(-8); // Obtén los últimos 8 títulos

  return (
    <div className="recent-audiobooks">
      <h2>Entradas Recientes</h2>
      <hr />
      <div className="recent-audiobooks-list">
        {recentAudiobooks.map((audiobook) => (
          <Link to={`/audiolibros/${audiobook.id}`} key={audiobook.id} className="audiobook-card-link">
            <div className="audiobook-card2">
              <img src={audiobook.coverUrl} alt={audiobook.title} />
              <h3>{audiobook.title}</h3>
              <p>{audiobook.author}</p>
              <span>
                {audiobook.media.map((iconName) => {
                  const MediaIcon = iconMap[iconName];
                  return MediaIcon && <MediaIcon key={iconName} />;
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentAudiobooks;

