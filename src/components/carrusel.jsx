// Carrusel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Importa las imágenes correctamente
import img1 from '../assets/imagen 1.webp';
import img2 from '../assets/imagen 2.webp';
import img3 from '../assets/imagen 3.webp';
import img4 from '../assets/imagen 4.webp';
import img5 from '../assets/imagen 5.webp';
import img6 from '../assets/imagen 6.webp';
import img7 from '../assets/imagen 7.webp';
import img8 from '../assets/imagen 8.webp';
import img9 from '../assets/imagen 9.webp';
import img10 from '../assets/imagen 10.webp';
import img11 from '../assets/imagen 11.webp';
import img12 from '../assets/imagen 12.webp';
import img13 from '../assets/imagen 13.webp';
import img14 from '../assets/imagen 14.webp';
import img15 from '../assets/imagen 15.webp'; 


const Carrusel = () => {
  return (
    <div className="my-20"> {/* Cambia my-10 a my-20 o más */}
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
                <img src={img1} alt="Descripción de la imagen 1" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="Descripción de la imagen 2" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="Descripción de la imagen 3" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="Descripción de la imagen 4" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="Descripción de la imagen 5" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} alt="Descripción de la imagen 6" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img7} alt="Descripción de la imagen 7" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img8} alt="Descripción de la imagen 8" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img9} alt="Descripción de la imagen 9" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img10} alt="Descripción de la imagen 10" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img11} alt="Descripción de la imagen 11" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img12} alt="Descripción de la imagen 12" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img13} alt="Descripción de la imagen 13" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img14} alt="Descripción de la imagen 14" className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img15} alt="Descripción de la imagen 15" className="w-full h-auto" />
            </SwiperSlide>
        </Swiper>
    </div>
);
};

export default Carrusel;