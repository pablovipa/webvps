import React from 'react';
export default function ProCarrousel(props) {
    return(
        <div  className="flex space-x-4 flex-col  items-center justify-center"> 
        <img 
        className='w-33 h-64'
        src={props.url} alt='product image' />
      <h2 className='object-center'> {props.name} </h2>
      <p className="text-4xl font-bold mb-4"> {props.price} </p>
      <p> {props.description} </p>
      <p>
        <button className="object-center " >Agregar</button>
      </p>
     </div>
    ) ;
}
