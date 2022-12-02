import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import AboutOne from '../container/AboutContainer.js/AboutOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function About() {
    return (
        <>
            <SEO title="Rapid Technologies || About" />
            <Header />
            <BreadCrumb mainTitle="About Us" title="Home" text="About us" img="/images/banner/bnr1.jpg" />
            <AboutOne />
            <Footer />
        </>
    )
}

export default About