import Layout from "../hocs/Layout"
import { connect } from 'react-redux';
import { 
    get_products_by_arrival, 
    get_products_by_sold 
} from '../redux/actions/products';
import { useEffect } from "react";
import Banner from '../components/home/Banner'
import ProductsArrival from '../components/home/ProductsArrival'
import ProductsSold from '../components/home/ProductsSold'
import Servicios from '../containers/pages/Servicios';
import Carousel1 from "../containers/pages/Carousel1";
import Carousel2 from "../containers/pages/Carousel2";
import VideoCarousel from "../containers/pages/VideoCarousel";
import React, { useState } from "react";
import CarouselBanner from "../containers/pages/CarouselBanner";
import FloatingButton from '../containers/pages/FloatingButton';
const Home = ({
    get_products_by_arrival, 
    get_products_by_sold,
    products_arrival,
    products_sold
}) => {

    useEffect(() => {
        window.scrollTo(0, 0);

        get_products_by_arrival();
        get_products_by_sold();
    }, []);

    return(
        <Layout>
            <div className="text-blue-500">
                <CarouselBanner/>
                <Carousel2 data={products_arrival}/>
                <FloatingButton />    
                <Servicios/>
                <ProductsSold data={products_sold}/>
                
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    products_arrival: state.Products.products_arrival,
    products_sold: state.Products.products_sold,
})

export default connect(mapStateToProps,{
    get_products_by_arrival, 
    get_products_by_sold,
}) (Home)
