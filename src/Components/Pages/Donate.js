import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import DonateOne from '../container/PaymentButton/DonateOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Donate() {
    return (
        <>
            <SEO title="Veni Foundation || Donate Money" />
            <Header />
            <BreadCrumb mainTitle="Donate Money" title="Home" text="Donate Now" img="/images/banner/bnr1.jpg" />
            <DonateOne />
            <Footer />
        </>
    )
}

export default Donate