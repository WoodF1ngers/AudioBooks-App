import React from 'react'
import Menu from '../../Components/HomePage/Menu'
import CategoryCard from '../../Components/CategoryCard'
import Footer from '../../Components/HomePage/Footer';
import RecentAudiobooks from '../../Components/Cards/HorizontalScroll/RecentAudiobooks'
import '../../Components/Styles/Categories/Categorias.css'
{/* <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css"></link> */ }


const Categorias = () => {
  return (
    <>
      <Menu />
      <div className='category-conteiner'>
        <h1>Categorías</h1>
        <p>Fantasía, drama, ficción... No estas seguro de cual título escoger?<br/>Busca entre las diferentes categorías
        seguro podrás encontrar el adecuado para el momento adecuado.</p>
        <div className='categoryTitle'>
          <img src="/src/assets/OIG2-5.jpeg" alt="CategoryImage" />
        </div>
        <CategoryCard categoryId="Ficción" categoryName="Ficción" />
        <CategoryCard categoryId="Drama" categoryName="Drama" />
        <CategoryCard categoryId="Romance" categoryName="Romance" />
        <CategoryCard categoryId="Fantasía" categoryName="Fantasía" />
        {/* Puedes agregar más CategoryCard con diferentes categorías */}
      </div>
      <RecentAudiobooks />
      <Footer />
    </>
  );
};

export default Categorias;