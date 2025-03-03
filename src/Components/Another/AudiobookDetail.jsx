// src/components/AudiobookDetail.jsx
import React, { useState } from 'react';
import Player from '../Audioplayer/Audioplayer';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import '../../Components/Styles/AudiobookDetail.css'
import HorizontalScrollDark from '../HomePage/HorizontalScrollDark';


const AudiobookDetail = ({ audiobook }) => {
  const [showFullPrologue, setShowFullPrologue] = useState(false);

  const togglePrologue = () => {
    setShowFullPrologue(!showFullPrologue);
  };

  return (
    <div className="audiobook-detail">
      <div className="detail-header">
        <img src={audiobook.coverUrl} alt={audiobook.title} />
        <div className="detail-info">
          <h2>{audiobook.title}</h2>
          <p>{audiobook.author} - {audiobook.genre} - {audiobook.year}</p>
          <div className='mediaDetails'>
            <HorizontalScrollDark />
          </div>
          <div className="detail-prologue">
            <h3>Sipnosis</h3>
            <p className={showFullPrologue ? 'expanded' : ''}>{audiobook.prologue}</p>
            <button className='sipnosisSpan' onClick={togglePrologue}>
              {showFullPrologue ? (
                <>
                  Mostrar menos<IoMdArrowDropup size={25} style={{ marginTop: '3px' }} />
                </>
              ) : (
                <>
                  Mostrar más<IoMdArrowDropdown size={25} style={{ marginTop: '3px' }} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <div className='detail-descriptionText'>
          <h3>Descripción</h3>
          <p>{audiobook.description}</p>
        </div>
        <div className="audio-player">
          <Player audioUrl={audiobook.audioUrl} />
        </div>
      </div>

    </div>
  );
};

export default AudiobookDetail;
