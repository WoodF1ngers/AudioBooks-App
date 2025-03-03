import React from 'react'
import '../Styles/HomePage/HorizontalScroll.css'
import { CiTimer } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { IoHeadset } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

const HorizontalScroll = () => {
  return (
    <div className='horizontalScroll-Container'>
      <dl>
        <dt> Duración</dt>
        <dd>< CiTimer /> 2H 10min</dd>
        <dt>Idioma</dt>
        <dd>< BiWorld /> Español</dd>
        <dt>Formato</dt>
        <dd>< IoHeadset />Audio</dd>
        <dt>Categoria</dt>
        <dd>< ImBooks /> Novela Corta</dd>
      </dl>
    </div>
  )
}

export default HorizontalScroll