// src/Pages/Ebooks.jsx
import React, { useState } from 'react';
import { audiobooks as ebooks } from '../../Components/Another/DataBase';
import { IoHeadset, IoClose } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa";
import '../../Components/Styles/Ebooks.css';
import Menu from '../../Components/HomePage/Menu';
import Footer from '../../Components/HomePage/Footer';
import Modal from 'react-modal';
import RecentAudiobooks from '../../Components/Cards/HorizontalScroll/RecentAudiobooks'
import PdfViewer from '../../Components/Ebooks/Pdfviewer';

const iconMap = {
  IoHeadset: IoHeadset,
  FaGlasses: FaGlasses,
};

const customStyles = {
  overlay: {
    zIndex: 10,
  },
  content: {
    width: '100%',
    height: 'auto',
    top: '50%',
    left: '50.6%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Ebooks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10); // Estado para el número de títulos visibles

  const handleSelectEbook = (ebook) => {
    setSelectedEbook(ebook);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEbook(null);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 10); // Incrementa el número de títulos visibles en 10
  };

  return (
    <>
      <Menu />
      <div className="ebooks-page">
        <h1>Ebooks</h1>
        <p className='ebooks-page-p'>
          Disfruta de la comodidad de llevar tus libros favoritos en tu dispositivo. <br />
          Desde los clásicos atemporales hasta títulos más actuales, hay algo para cada lector en nuestra colección.
        </p>
        <div className='ebooksGalleryTitle'>
          <img src="/src/assets/OIBooks2.jpeg" alt="Ebooks Gallery" />
        </div>
        <div className="ebooks-list">
          {ebooks.slice(0, visibleCount).map((ebook) => (
            <div
              key={ebook.id}
              className="ebooks-item"
              onClick={() => handleSelectEbook(ebook)}
            >
              <img src={ebook.coverUrl} alt={ebook.title} />
              <h2>{ebook.title}</h2>
              <p>{ebook.author}</p>
              <span>
                {ebook.media.map((iconName) => {
                  const MediaIcon = iconMap[iconName];
                  return MediaIcon && <MediaIcon key={iconName} />;
                })}
              </span>
            </div>
          ))}
        </div>
        {visibleCount < ebooks.length && ( // Muestra el botón solo si hay más títulos para mostrar
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="load-more-button">Cargar más</button>
          </div>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Ebook Details"
      >
        {selectedEbook && (
          <div className="ebooks-detail">
            <div className="detail-header">
              <img src={selectedEbook.coverUrl} alt={selectedEbook.title} />
              <div className="detail-info">
                <h2>{selectedEbook.title}</h2>
                <p>{selectedEbook.author}</p>
              </div>
              <div className="closerIcon" onClick={closeModal}>
                <IoClose size={50} />
              </div>
            </div>
            <div className="detail-description">
              <p>{selectedEbook.description}</p>
            </div>
            <div className="detail-pdf">
              <PdfViewer pdfUrl={selectedEbook.pdfUrl} />
            </div>
          </div>
        )}
      </Modal>
      <RecentAudiobooks />
      <Footer />
    </>
  );
};

export default Ebooks;
