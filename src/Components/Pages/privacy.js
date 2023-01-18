import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Privacyone from '../container/policyContainer/PrivacyOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Privacy() {
    return (
        <>
            <SEO title="Veni Foundations || Privacy&Policy" />
            <Header />
            <BreadCrumb mainTitle="Privacy&Policy" title="Home" text="Privacy&Policy" img="/images/banner/jk.jpg" />
            <Privacyone/>
            <Footer />
        </>
    )
}

export default Privacy