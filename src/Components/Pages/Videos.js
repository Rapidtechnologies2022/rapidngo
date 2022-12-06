import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Videos() {
    return (
        <>
            <SEO title="Veni Foundation || Blogs" />
            <Header />
            <BreadCrumb mainTitle="Gallery" title="Home" text="Videos" img="/images/banner/bnr1.jpg" />
            <Footer />
        </>
    )
}

export default Videos