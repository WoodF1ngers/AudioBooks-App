import React from 'react'
import '../../Components/Styles/HomePage/Footer.css'
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='table1-Footer'>
        <div className='table1-Footer-title'>
          <h3>Shelf</h3>
        </div>
        <div className='socialIcons'>
          <a href="#"><TiSocialFacebook size={"40px"} /></a>
          <a href="#"><TiSocialInstagram size={"40px"} /></a>
          <a href="#"><TiSocialYoutube size={"40px"} /></a>
        </div>
      </div>
      <div className='table2-Footer'>
        <div className='table2-Footer-title'>
          <h3>Explorar</h3>
        </div>
        <ul className='table2-Footer-list1'>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Categorías</a></li>
          <li><a href="/">Audiolibros</a></li>
          <li><a href="/">Ebooks</a></li>
        </ul>
      </div>
      <div className='table3-Footer'>
      <div className='table3-Footer-title'>
          <h3>Enlaces</h3>
        </div>
        <ul className='table3-Footer-list1'>
          <li><a href="/">Política de privacidad</a></li>
          <li><a href="/">Condiciones de uso</a></li>
          <li><a href="/">Acerca de</a></li>
        </ul>
      </div>
      <div className='table4-Footer1'>
        <hr />
        <div className='table4-Footer2'>
          <p>2024 - Powered by Pixint Lab</p>
        </div>
      </div>
    </section>
  )
}

export default Footer