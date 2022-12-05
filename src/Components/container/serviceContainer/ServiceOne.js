import React, { useState } from 'react'

function ServiceOne() {
    const [open, setOpen] = useState("p2")

    return (
        <section className="content-inner">
            <div className="container">
                <div className="section-head style-3 text-center">
                    <h2 className="title">Our Services</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                        <div className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p1")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/prenatal-care.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Pregnant Women</h4>
                                <p className="m-b20">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p2")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/woman.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Women Empowerment</h4>
                                <p className="m-b20">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p3")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/reading.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Child Education</h4>
                                <p className="m-b20">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className={`${open === "p4" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p4")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/food-donation.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Food Donation</h4>
                                <p className="m-b20">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className={`${open === "p5" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p5")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/farmer.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15"> Support Farmers</h4>
                                <p className="m-b20"> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className={`${open === "p6" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p6")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/healthcare.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Medical Support</h4>
                                <p className="m-b20">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceOne