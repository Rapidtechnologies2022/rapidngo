import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Features from '../container/homeContainer/Features'
import ServiceOne from '../container/serviceContainer/ServiceOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Services() {
    return (
        <>
            <SEO title="Rapid Technologies || Our Services" />
            <Header />
            <BreadCrumb mainTitle="Our Services" title="Home" text="Our Services" img="/images/banner/heart1.jpg" />
            <ServiceOne />
            <Features />
            <Footer />
        </>
    )
}

export default Services