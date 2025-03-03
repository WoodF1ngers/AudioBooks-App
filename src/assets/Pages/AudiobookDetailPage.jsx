// src/assets/Pages/AudiobookDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { audiobooks } from '../../Components/Another/DataBase';
import AudiobookDetail from '../../Components/Another/AudiobookDetail';
import Menu from '../../Components/HomePage/Menu';
import SimilarTitles from '../../Components/SimilarTitles';
import Footer from '../../Components/HomePage/Footer';

const AudiobookDetailPage = () => {
  const { id } = useParams();
  const audiobook = audiobooks.find((book) => book.id === id);

  if (!audiobook) {
    return <p>Audiobook not found</p>;
  }

  return (
    <>
      <Menu />
      <AudiobookDetail audiobook={audiobook} onClose={() => {}} />
      <SimilarTitles category={audiobook.category} currentAudiobookId={audiobook.id} />
      <Footer />
    </>
  );
};

export default AudiobookDetailPage;
