// src/components/Audioplayer.jsx
import React, { useRef, useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { BiSolidTimer } from 'react-icons/bi';
import 'react-h5-audio-player/lib/styles.css';
import './Styles/Audioplayer.css';

const Player = ({ audioUrl }) => {
  const playerRef = useRef();
  const [isSpeedHandleVisible, setIsSpeedHandleVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeedChange = (speed) => {
    if (playerRef.current && playerRef.current.audio.current) {
      playerRef.current.audio.current.playbackRate = speed;
    }
  };

  const toggleSpeedHandle = () => {
    setIsSpeedHandleVisible(!isSpeedHandleVisible);
  };

  useEffect(() => {
    // Cada vez que cambie la URL del audio, asegúrate de que no se reproduzca automáticamente
    setIsPlaying(false);
    if (playerRef.current && playerRef.current.audio.current) {
      playerRef.current.audio.current.pause();
      playerRef.current.audio.current.load();
    }
  }, [audioUrl]);

  return (
    <div className="AudioPlayer-Container">
      <div className="speedIcon" onClick={toggleSpeedHandle}>
        <BiSolidTimer color="#808080" size={22} />
      </div>
      <AudioPlayer
        autoPlay={isPlaying}
        src={audioUrl} // Utiliza la URL del archivo de audio proporcionada como prop
        ref={playerRef}
        showSkipControls={false}
        showJumpControls={false}
        showDownloadProgress={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {isSpeedHandleVisible && (
        <div className="speedHandle">
          <button className="speedButton" onClick={() => handleSpeedChange(1.0)}>
            1.0x
          </button>
          <button className="speedButton" onClick={() => handleSpeedChange(1.5)}>
            1.5x
          </button>
          <button className="speedButton" onClick={() => handleSpeedChange(2.0)}>
            2.0x
          </button>
        </div>
      )}
    </div>
  );
};

export default Player;
