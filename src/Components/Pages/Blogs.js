import React from 'react'
import BreadCrumb from '../breadCrumb/BreadCrumb'
import BlogOne from '../container/blogContainer/BlogOne'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Blogs() {
    return (
        <>
            <SEO title="Rapid Technologies || Blogs" />
            <Header />
            <BreadCrumb mainTitle="Blogs" title="Home" text="Blogs" img="/images/banner/bnr1.jpg" />
            <BlogOne />
            <Footer />
        </>
    )
}

export default Blogs