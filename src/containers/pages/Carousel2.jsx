import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel2 = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (data && data.length) {
      const adjustedData = [
        data[(startIndex + 0) % data.length],
        data[(startIndex + 1) % data.length],
      ];
      if (windowWidth > 768) {
        adjustedData.push(
          data[(startIndex + 2) % data.length],
          data[(startIndex + 3) % data.length],
          data[(startIndex + 4) % data.length]
        );
      }
      setVisibleProducts(adjustedData);
    }
  }, [data, startIndex, windowWidth]);

  const showNext = () => {
    setStartIndex((startIndex + 1) % data.length);
  };

  const showPrevious = () => {
    setStartIndex((startIndex - 1 + data.length) % data.length);
  };

  const imageWidth = windowWidth > 768 ? 500 : 300;
  const aspectRatio = 28 / 38; // Ajusta esto según la relación de aspecto de tus imágenes
  
  const imageHeight = `${imageWidth * aspectRatio}px`;
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        {visibleProducts.map((product) => (
          <div key={product.id} className="group relative p-4">
            <div className="w-full h-full rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
              <img
                src={product.photo}
                alt=""
                style={{   width: `${imageWidth}px`,
                height: imageHeight,
                objectFit: "contain", // Cambia "contain" por "cover" si prefieres recorte
              }}
              className="object-center"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              <Link to={`/product/${product.id}`}>
                <span className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
      <button
        className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-gray-800 focus:outline-none"
        style={{ backgroundColor: 'white', color: 'darkblue' }}
        onClick={showPrevious}
      >
        {"<"}
      </button>
      <button
        className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-gray-800 focus:outline-none"
        style={{ backgroundColor: 'white', color: 'darkblue' }}
        onClick={showNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel2;


