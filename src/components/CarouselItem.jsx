import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='../img/three-woman-sitting-on-white-chair-in-front-of-table-2041627.jpg'
      alt='Tech Team'
    />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src='../assets/icons8-play-64.png' alt='Icono play' />
        <img className='carousel-item__details--img' src='../assets/icons8-añadir-48.png' alt='Icono más' />
      </div>
      <p className='carousel-item__details--title'>Título provisional</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 10 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
