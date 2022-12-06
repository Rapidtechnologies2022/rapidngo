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

function HomePage() {
    return (
        <>
            <SEO title="Rapid Technologies || Home" />
            <Header />
            <Slide />
          {/*   <Client /> */}
            <HomeAbout />
            <HomeService />
            <Helping/>
            <Newsletter />
            <Features />
            <Footer />
        </>
    )
}

export default HomePage