import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import ContactOne from '../container/contactContainer/ContactOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Contact() {
    return (
        <>
            <SEO title="Rapid Technologies || Contact" />
            <Header />
            <BreadCrumb mainTitle="Contact Us" title="Home" text="Contact us" img="/images/banner/bnr1.jpg" />
            <ContactOne />
            <Footer />
        </>
    )
}

export default Contact