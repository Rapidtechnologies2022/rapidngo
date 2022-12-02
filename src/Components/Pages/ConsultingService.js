import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function ConsultingService() {
    return (
        <>
            <SEO title="Rapid Technologies || Consulting Services" />
            <Header />
            <BreadCrumb mainTitle="Consulting Services" title="Home" text="Consulting and OutSourcing Services" img="/images/banner/bnr1.jpg" />
            <Footer />
        </>
    )
}

export default ConsultingService