import React, { useState } from 'react';
//import './TextToggle.css'; // Archivo de estilos CSS (puedes utilizar Tailwind CSS aquí también)

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
      
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="https://pablovipacontenedor.s3.amazonaws.com/serviciotriple.png"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
           
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Servicio de Confección TEXTIL
              </h2>
              <p className="leading-relaxed text-base">
              Estamos orientados a conseguir resultados de una manera eficiente, cumpliendo con fechas,
               ficha técnica y acabados solicitados por el cliente.
              </p>
          
          <div className="container mx-auto p-4">
             <div className="flex items-center">
              <span className="cursor-pointer text-2xl mr-2" onClick={toggleVisibility}>
                 {isVisible ? '-' : '+'}
             </span>
             <p className={`text-xl ${isVisible ? 'block' : 'hidden'}`}>
                 •Costura recta    •Costura  remalladora
             </p>
           </div>
           </div>

            </div>
          </div>
          {/* ... (similarmente para las otras dos secciones) */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
           
           <div className="flex-grow">
             <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
             Servicio de Estampado
             </h2>
             <p className="leading-relaxed text-base">
             Somos los responsables de personalizar cada prenda siendo un compromiso cada proyecto,
              de manera curiosos exploramos nuevos caminos, al igual que las otras áreas nos anticipándonos a las
               situaciones y respondemos al cambio de forma proactiva.
             </p>

         
         <div className="container mx-auto p-4">
            <div className="flex items-center">
             <span className="cursor-pointer text-2xl mr-2" onClick={toggleVisibility}>
                {isVisible ? '-' : '+'}
            </span>
            <p className={`text-xl ${isVisible ? 'block' : 'hidden'}`}>
               •Transfer      •Sublimación        •Serigrafía
               •Tinta al agua •Tinta plastisol    •Estampado vinil

            </p>
          </div>
          </div>

           </div>
         </div>


         <div className="flex flex-col mb-10 lg:items-start items-center">
           
           <div className="flex-grow">
             <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
             Servicio de Bordado

             </h2>
             <p className="leading-relaxed text-base">
             Con experiencia en todo tipo de trabajos Bordados, sobre distintos tipos de materiales, aplicaciones,
              parches y muchas ideas que pueden ser aplicadas a distintos tipos de nichos de mercado y rubros.
             </p>
         
         <div className="container mx-auto p-4">
            <div className="flex items-center">
             <span className="cursor-pointer text-2xl mr-2" onClick={toggleVisibility}>
                {isVisible ? '-' : '+'}
            </span>
            <p className={`text-xl ${isVisible ? 'block' : 'hidden'}`}>
              •Lisos: aquellos que apenas sobresalen

              •Realce: este tipo presenta mucho relieve.

              •Sobrepuesto: este se borda fuera de la pieza y posteriormente se cose a ella.
            </p>
          </div>
          </div>

           </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
