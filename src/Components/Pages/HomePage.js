import React from 'react'
import Features from '../container/homeContainer/Features'
import HomeAbout from '../container/homeContainer/HomeAbout'
import Client from '../container/homeContainer/homeClient/Client'
import HomeService from '../container/homeContainer/HomeService'
import Helping from '../container/homeContainer/Helping '
import Newsletter from '../container/homeContainer/NewsLetter'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'
import Slide from '../slide/Slide'
import Gomata from '../container/homeContainer/Gomata'

function HomePage() {
    return (
        <>
            <SEO title="Veni Foundations || Home" />
            <Header />
            <Slide />
            {/*   <Client /> */}
            <HomeAbout />
            <HomeService />
            <Helping />
            <Newsletter />
            <Gomata />
            <Features />
            <Footer />
        </>
    )
}

export default HomePage