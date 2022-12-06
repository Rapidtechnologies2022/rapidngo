import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import JoinWithUs from '../container/homeContainer/JoinWithUs'
import BecomeVonunteer from '../container/Volunteer/BecomeVonunteer'
import VolunteerOne from '../container/Volunteer/VolunteerOne'
import VolunteerTwo from '../container/Volunteer/VolunteerTwo'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SEO from '../SEO/SEO'

function Volunteers() {
    return (
        <>
            <SEO title="Veni Foundations || Become Volunteer" />
            <Header />
            <BreadCrumb mainTitle="Become Volunteer" title="Home" text="Volunteer" img="/images/banner/bnr1.jpg" />
            <VolunteerTwo />
            <VolunteerOne />
            <BecomeVonunteer />
            <JoinWithUs />
            <Footer />
        </>
    )
}

export default Volunteers