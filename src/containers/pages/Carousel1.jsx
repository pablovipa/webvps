import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProCarrousel from './ProCarrousel';


export default function Carousel1(){

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4 ,
      slidesToSlide:3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3 ,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2 ,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 ,
    },
  };
   
  const productData = [
    {  id : 1,
       imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
       name : "losldfjl ",
       price :"23",
       description : "hola l",   
    } ,
    {  id : 2,
      imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
      name : "sport ",
      price :"23",
      description : "hola l",   
   } ,
   {  id : 3,
    imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
    name : "sport ",
    price :"23",
    description : "hola l",   
 } ,
 {  id : 4,
  imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
  name : "sport ",
  price :"23",
  description : "hola l",   
} ,
{  id : 5,
  imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
  name : "sport ",
  price :"23",
  description : "hola l",   
} ,
{  id : 6,
  imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
  name : "sport ",
  price :"23",
  description : "hola l",   
} ,
{  id : 7,
  imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
  name : "sport ",
  price :"23",
  description : "hola l",   
} ,
{  id : 8,
  imageurl : "https://pablovipacontenedor.s3.amazonaws.com/pr.jpeg",
  name : "sport ",
  price :"23",
  description : "hola l",   
} ,
  ]

const procarrousel = productData.map((item) =>(
 <ProCarrousel 
 name={item.name} 
 url={item.imageurl}
 price={item.price}
 description={item.description} />
));

return (
       <div >
        <h1 className="flex flex-col items-center justify-center text-4xl font-bold mb-4" >Carousel121</h1>
        <Carousel responsive={responsive}>
        {procarrousel}
        </Carousel>
        </div>
    );
}
