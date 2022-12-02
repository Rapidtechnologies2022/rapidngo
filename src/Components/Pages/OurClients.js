import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import Client from '../container/homeContainer/homeClient/Client'
import JoinWithUs from '../container/homeContainer/JoinWithUs'
import OurClientOne from '../container/ourClient/OurClientOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function OurClients() {
    return (
        <>
            <SEO title="Rapid Technologies || Our Client" />
            <Header />
            <BreadCrumb mainTitle="Our Client" title="Home" text="Our Clients" img="/images/banner/bnr1.jpg" />
            <Client />
            <OurClientOne />
            <JoinWithUs />
            <Footer />
        </>
    )
}

export default OurClients