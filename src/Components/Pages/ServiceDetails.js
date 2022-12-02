import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function ServiceDetails() {
    return (
        <>
            <SEO title="Rapid Technologies || Service Details" />
            <Header />
            <BreadCrumb mainTitle="Service Details" title="Home" text="Service Details" img="/images/banner/bnr1.jpg" />
            <Footer />
        </>
    )
}

export default ServiceDetails