import React from 'react'
import '../Styles/HomePage/TestWelcomeCard.css'
import HorizontalScroll from './HorizontalScroll'
import CustomAudioPlayer from '../Audioplayer/CustomAudioPlayer'
// import '../../../public/Audios/The_Weeknd_-_Starboy_(feat_Daft_Punk).mp3'



const TestWelcomeCard = () => {
  return (
    <>
      <section className='testCard-conteiner'>
        <div className='testCard'>
          <div className='bookCoverInfo'>
            <div className='img-container'>
              <div className='PlayerMinimal-container'>
                <img src="src\assets\BookCovers\laMetamorfosis.jpg" alt="" />
                <div className='PlayerMinimal'>
                  <CustomAudioPlayer audioUrl={'../../../public/Audios/La Metamorfosis - Extracto1.mp3'} />
                </div>
              </div>
            </div>
            {/* <div className='textInfo'>
              <h2>La Metamorfosis</h2>
              <p>Franz Kafka</p>
            </div> */}
          </div>

          <div className='bookPrologue-container'>
            <h3>
              "La Metamorfosis", la obra maestra del escritor checo Franz Kafka, es un relato surrealista que ha cautivado a lectores de todo el mundo desde su publicación en 1915. La historia comienza con la impactante transformación de Gregor Samsa en un insecto gigante, un evento que desencadena una serie de eventos extraordinarios y perturbadores. A través del lente de esta extraña metamorfosis, Kafka explora temas universales como la alienación, la soledad, la incomunicación y la búsqueda de la identidad en un mundo que a menudo parece absurdo y hostil. Con su profunda exploración de la condición humana, "La Metamorfosis" sigue siendo una obra fundamental de la literatura moderna que continúa intrigando y desconcertando a los lectores hasta el día de hoy.
            </h3>
            <div className='horizontalCroll'>
              <HorizontalScroll />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default TestWelcomeCard