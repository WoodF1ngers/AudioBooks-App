import React, { useRef, useState } from 'react';
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";;
import './Styles/CustomAudioPlayer.css';

const CustomAudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="custom-audio-player">
      <audio ref={audioRef} src={audioUrl} />
      <button className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? <FaCirclePause size={45}/> : <FaCirclePlay  size={45}/>}
      </button>
    </div>
  );
};

export default CustomAudioPlayer;
