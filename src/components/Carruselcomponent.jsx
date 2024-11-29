import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const imagenes = Array.from({ length: 15 }, (_, i) => `/img carrusel/imagen ${i + 1}.webp`);

const Carrusel = () => {
    return (
        <div className="my-14 bg-gradient-to-r from-green-200 via-green-400 to-purple-700">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}  
                modules={[Autoplay, Pagination, Navigation]}
            >
                {imagenes.map((imagen, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={imagen} 
                            alt={`Descripción de la imagen ${index + 1}`} 
                            className="w-full h-auto" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrusel;