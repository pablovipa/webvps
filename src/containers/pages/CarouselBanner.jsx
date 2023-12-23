import React, { useState , useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useMediaQuery } from '@react-hook/media-query';


function CarouselBanner() {

  const isMobile = useMediaQuery('(max-width: 767px)');

  const slides = [
    {

      url: isMobile
        ? 'https://pablovipacontenedor.s3.amazonaws.com/bannersm1a.gif'
        : 'https://pablovipacontenedor.s3.amazonaws.com/banner1AA.gif',
      
    },
    {
      url: isMobile
        ? 'https://pablovipacontenedor.s3.amazonaws.com/banner2sm.gif'
        : 'https://pablovipacontenedor.s3.amazonaws.com/banner2.gif',

    },
    {
       url: isMobile
        ? 'https://pablovipacontenedor.s3.amazonaws.com/banner3.gif'
        : 'https://pablovipacontenedor.s3.amazonaws.com/banner3A.gif',
    },

    {
       url: isMobile
        ? 'https://pablovipacontenedor.s3.amazonaws.com/banner4.png'
        : 'https://pablovipacontenedor.s3.amazonaws.com/banner4A.png',
    },
    {
       url: isMobile
        ? ''
        : '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoPlayTimeout = 5000; // Tiempo en milisegundos para cambiar automáticamente al siguiente slide
  let autoPlayTimer;

  useEffect(() => {
    // Función para cambiar automáticamente al siguiente slide
    const autoPlay = () => {
      autoPlayTimer = setTimeout(() => {
        nextSlide();
      }, autoPlayTimeout);
    };

    // Iniciar el autoplay cuando el componente está montado
    autoPlay();

    // Limpiar el temporizador al desmontar el componente
    return () => {
      clearTimeout(autoPlayTimer);
    };
  }, [currentIndex]); // Ejecutar efecto cada vez que cambia el índice actual


  return (
    <div className='max-w-[1500px] h-[530px] w-full m-auto relative'>
  <div
    style={{ backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: 'contain', }}
    className=' w-full h-full bg-center bg-no-repeat duration-500 sm:bg-contain md:bg-bg-contain lg:bg-contain xl:bg-contain relative'
  ></div>
  {/* Left Arrow */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
  </div>
  {/* Right Arrow */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={30} />
  </div>
  <div className='flex justify-center absolute bottom-4 left-0 right-0'>
    {slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`text-2xl cursor-pointer mx-2 ${
          currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'
        }`}
      >
        <RxDotFilled />
      </div>
    ))}
  </div>
</div>

  
  );
}

export default CarouselBanner;
