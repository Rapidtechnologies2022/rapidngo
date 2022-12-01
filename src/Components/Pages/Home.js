import React from 'react'
import Footer from '../Container/Footer/Footer'
import Slider from '../Container/HomePageContainer/Slider'
import SEO from '../Container/SEO/SEO'
import TopNav from '../Container/TopNav/TopNav'
import UpComing from '../Container/HomePageContainer/UpComing'


const Home = () => {
    return (
        <React.Fragment>
            <SEO title="Ngo || Home" />
            <TopNav/>
            <Slider/>
            <UpComing/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
