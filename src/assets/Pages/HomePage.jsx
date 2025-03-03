import { useState } from 'react'
import Menu from '../../Components/HomePage/Menu.jsx'
import Banner from '../../Components/HomePage/Banner.jsx'
import TestWelcomeCard from '../../Components/HomePage/TestWelcomeCard.jsx'
import '../../Components/Styles/HomePage/HomePage.css'
import Footer from '../../Components/HomePage/Footer.jsx'
import { RiMentalHealthFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import RecentAudiobooks from '../../Components/Cards/HorizontalScroll/RecentAudiobooks.jsx'




function Homepage() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Menu />
      <Banner />
      <TestWelcomeCard />
      <section className='Welcome1'>
        <h1>
          Los mejores títulos clásicos para todas las edades
        </h1>
      </section>
      <br /><br />
      <section className='anyContent-container'>
        <div className='anyDeviceAdd'>
          <div className='imgDevice-container'>
            <img src="src\assets\Images\app\OIG4 (2).jpeg" alt="" />
          </div>
          <div className='text-container'>
            <article className='textLeyend'>
              <h2>A TU MANERA Y DONDE QUIERAS</h2>
              <p>Disfruta de un audiolibros en cualquier momento, de la forma que sea. Decenas de títulos de la mejor lectura listos para leer o escuchar en tus dispositivos preferidos.</p>
            </article>
          </div>
        </div>
      </section>
      <br /><br /><br />
      <section className='anyContentAdd'>
        <div className='anyContentAdd-title'>
          <h1>Datos importantes y algunos curiosos para compartir</h1>
        </div>
        <article className='someStadistics'>
          <div className='stadistic'>
          <div className='stadisticH1'>
              <h1>58%</h1>
              <span>
              <RiMentalHealthFill size={40} color='#d83f87'/>
              </span>  
            </div>
            <h3>La reducción del estrés al escuchar algún audiolibro relajante, según estudio de la Universidad de Sussex.</h3>
          </div>
          <div className='stadistic'>
            <div className='stadisticH1'>
              <h1>85%</h1>
              <span>
              <FaBookOpenReader size={38} color='#14a76c'/>
              </span>
            </div>
            <h3>De los estudiantes con dificultades de lectura mejoran su comprensión al usar audiolibros.</h3>
          </div>
          <div className='stadistic'>
            <div className='stadisticH1'>
              <h1>76%</h1>
              <span>
              <RiSpeakFill size={40} color='#44318d'/>
              </span>
            </div>
            <h3> De los oyentes, según un estudio, cree que los audiolibros mejoran su vocabulario y pronunciación.</h3>
          </div>
          <div className='stadistic'>
          <div className='stadisticH1'>
              <h1>2 hrs</h1>
              <span>
              <MdTimer size={40} color='#45a29e'/>
              </span>
            </div>
            <h3>Escuchar es más rápido que leer, se ahorran hasta dos horas al día, según un estudio de Nielsen</h3>
          </div>
          <div className='stadisticImg'><img src=".\OIG2.zNWx3tbP.jpeg" alt="" /></div>
        </article>
      </section>
      <RecentAudiobooks />
      <Footer />
    </>
  )
}

export default Homepage