import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Gallery from '../container/GalleryContainer/Gallery'
import SEO from '../SEO/SEO'

function Images() {
    return (
        <>
            <SEO title="Veni Foundation || Gallery" />
            <Header />
            <BreadCrumb mainTitle="Images" title="Home" text="Gallery" img="/images/banner/bnr1.jpg" />
            <Gallery />
            <Footer />

        </>
    )
}

export default Images