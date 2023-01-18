import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Termsone from '../container/policyContainer/TermsOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Terms() {
    return (
        <>
            <SEO title="Veni Foundations || Terms and Conditions" />
            <Header />
            <BreadCrumb mainTitle="Terms&Conditions" title="Home" text="Terms&Conditions" img="/images/banner/pic1.jpg" />
          <Termsone/>
            <Footer />
        </>
    )
}

export default Terms