import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function DigitalMarketing() {
    return (
        <>
            <SEO title="Rapid Technologies || Digital Marketing" />
            <Header />
            <BreadCrumb mainTitle="Digital Marketing" title="Home" text="Digital Marketing" img="/images/banner/bnr1.jpg" />
            <Footer />
        </>
    )
}

export default DigitalMarketing