import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function TrainingAndPlacement() {
    return (
        <>
            <SEO title="Rapid Technologies || Training And Placements" />
            <Header />
            <BreadCrumb mainTitle="IT Training & Placements" title="Home" text="IT Training & Placements" img="/images/banner/bnr1.jpg" />
            <Footer />
        </>
    )
}

export default TrainingAndPlacement