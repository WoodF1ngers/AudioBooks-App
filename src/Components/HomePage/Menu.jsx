import React, { useState } from 'react';
import '../Styles/HomePage/Menu.css';
import { BiLibrary, BiX } from "react-icons/bi";
import SearchBar from '../SearchBar/SearchBar';


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/"><img src="../../../public/Shelf - Logo3.png" alt="" /></a>
        </div>
        <div className='search-bar1'>
          <SearchBar />
        </div>
        <div className="menu-items">
          <ul className={`menu ${menuOpen ? 'open' : ''}`}>
            <a className='menuTexto' href="/"><li>Inicio</li></a>
            <a className='menuTexto' href="/categorias"><li>Categorías</li></a>
            <a className='menuTexto' href="/audiolibros"><li>Audiolibros</li></a>
            <a className='menuTexto' href="/ebooks"><li>E-books</li></a>
            <div className={`search-bar-wrapper ${menuOpen ? 'menu-open' : ''}`}>
              <SearchBar />
            </div>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Utiliza una expresión ternaria para renderizar el icono correspondiente */}
          {menuOpen ? <i className='icon1'><BiX size={50} /></i> : <i className='icon1'><BiLibrary size={40} /></i>}
        </div>

      </nav>
    </>
  );
};

export default Menu;
