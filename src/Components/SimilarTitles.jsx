// SimilarTitles.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import { audiobooks } from './Another/DataBase';
import { IoHeadset } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa";
import './Styles/SimilarTitles.css';

// Mapeo de iconos
const iconMap = {
  IoHeadset: IoHeadset,
  FaGlasses: FaGlasses,
};

const SimilarTitles = ({ category, currentAudiobookId }) => {
  const similarAudiobooks = audiobooks.filter((audiobook) => 
    audiobook.category === category && audiobook.id !== currentAudiobookId
  );

  return (
    <div className="similar-titles">
      <h2>Títulos Similares</h2>
      <hr />
      <div className="similar-titles-list">
        {similarAudiobooks.map((audiobook) => (
          <Link to={`/audiolibros/${audiobook.id}`} key={audiobook.id} className="audiobook-card-link">
            <div className="audiobook-card">
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

export default SimilarTitles;
