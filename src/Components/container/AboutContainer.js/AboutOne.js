import React from 'react'


function AboutOne() {
    return (
        <div className="page-content bg-white">
            <section className="content-inner">
                <div className="container">
                <div className="section-head style-3 text-center">
                    <h2 className="title">About <span className="text-primary">Us</span></h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="dz-media">
                                <img src="images/about/pic1.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className="section-head style-1 mt-4">
                             {/*    <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6> */}
                         {/*     <h2 className="title"><span className="text-primary">About the </span>venifoundation</h2> */}
                               <h2 className="title">We are tender heart charity foundation.</h2> 
                            </div>
                            <p >Veni Foundation is a non-profit organization dedicated to improving the lives of people in need. We believe that access to essential resources, such as food, medicine, education, and clean water, can change everything for a person. Our mission is to provide these resources to those who need them the most, aiming to improve the community's overall health and well-being.</p>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="list-arrow primary">
                                        <li>We strive to empower and uplift the lives of those in need.</li>
                                        <li>We work tirelessly to provide necessities and resources to underprivileged communities.</li>
                                        <li>Every individual deserves equal access to opportunities and resources.</li>
                                        <li>We are committed to positively impacting the lives of those we serve.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutOne