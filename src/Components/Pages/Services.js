import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import Features from '../container/homeContainer/Features'
import ServiceOne from '../container/serviceContainer/ServiceOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Services() {
    return (
        <>
            <SEO title="Rapid Technologies || Services" />
            <Header />
            <BreadCrumb mainTitle="Services" title="Home" text="Services" img="/images/banner/bnr1.jpg" />
            <ServiceOne />
            <Features />
            <Footer />
        </>
    )
}

export default Services