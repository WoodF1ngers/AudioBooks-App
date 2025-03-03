import React, { useState, useRef } from 'react';
import './Styles/InfiniteSrollSlider.css'; // Estilos CSS para el slider

const Slider = ({ data }) => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef();

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad del scroll
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="slider-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={sliderRef}
    >
      <div className="slider">
        {data.map((item, index) => (
          <div className="slide" key={index}>
            {/* Aquí puedes mostrar los datos de cada slide */}
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
