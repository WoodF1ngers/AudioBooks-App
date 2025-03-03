// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from './Components/Another/Spinner';
import { SearchProvider } from './Components/SearchBar/SearchContext';
const Homepage = lazy(() => import('./assets/Pages/HomePage'));
const Audiolibros = lazy(() => import('./assets/Pages/Audiolibros'));
const AudiobookDetailPage = lazy(() => import('./assets/Pages/AudiobookDetailPage'));
const Categorias = lazy(() => import('./assets/Pages/Categorias'));
const Ebooks = lazy(() => import('./assets/Pages/Ebooks'));

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/audiolibros" element={<Audiolibros />} />
            <Route path="/audiolibros/:id" element={<AudiobookDetailPage />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/ebooks" element={<Ebooks />} />
          </Routes>
        </Suspense>
      </Router>
    </SearchProvider>
  );
};

export default App;