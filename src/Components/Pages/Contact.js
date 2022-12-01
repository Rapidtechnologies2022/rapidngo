import React from 'react'
import Breadcrumb from '../BreadCrumb/BreadCrumb'
import Footer from '../Container/Footer/Footer'
import SEO from '../Container/SEO/SEO'
import TopNav from '../Container/TopNav/TopNav'

export default function Contact() {
  return (
    <React.Fragment>
      <SEO title="Ngo || Contact Us" />
      <TopNav />
      <Breadcrumb image="images/about/herb.jpg" title="Home" content="Contact Us" />
      <Footer />
    </React.Fragment>
  )
}
