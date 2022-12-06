import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Images() {
    return (
        <>
            <SEO title="Veni Foundation || Gallery" />
            <Header />
            <BreadCrumb mainTitle="Images" title="Home" text="Gallery" img="/images/banner/bnr1.jpg" />
            <Footer />
        </>
    )
}

export default Images