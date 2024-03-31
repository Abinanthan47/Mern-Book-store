import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './FavoriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import Footer from './Footer'

const Home = () => {
    return (
        
        <div>
            <Banner/>
            <BestSellerBooks/>
            <FavBook/>
            <PromoBanner/>
            <OtherBooks/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default Home