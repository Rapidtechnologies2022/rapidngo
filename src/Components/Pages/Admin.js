import React from 'react'
import AdminOne from '../container/AdminContainer/AdminOne'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Admin() {
  return (
    <>
      <SEO title="Veni Foundations || Admin" />
      <Header />
      <BreadCrumb mainTitle="Upload Images" title="Home" text="My Admin" img="/images/banner/bnr1.jpg" />
      <AdminOne/>
    </>
  )
}

export default Admin