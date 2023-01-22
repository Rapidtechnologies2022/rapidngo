import React, { useState } from 'react'

function ServiceOne() {
    const [open, setOpen] = useState("p2")

    return (
        <section className="content-inner">
            <div className="container">
                <div className="section-head style-3 text-center">
                    {/* <h2 className="title">Our Services</h2> */}
                    <h2 className="title">Our <span className="text-primary">Services</span></h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                        <div style={{ height: "95%" }} className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p1")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/pcare.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Pregnant Women</h4>
                                <p className="m-b20">The Veni Foundation helps pregnant women by providing access to prenatal care, nutrition education, and other resources to ensure healthy pregnancies and safe deliveries. They also support new mothers, such as postnatal care and parenting classes.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div style={{ height: "95%" }} className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p2")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/woman.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Women Empowerment</h4>
                                <p className="m-b20">The NGO empowers women through education and job training programs, helping them become self-sufficient and achieve financial independence. They also work on improving women's lives by providing them access to health services and opportunities for personal development.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div style={{ height: "95%" }} className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p3")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/reading.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Child Education</h4>
                                <p className="m-b20">The foundation provides educational opportunities for children in underprivileged communities, helping to break the cycle of poverty through access to quality education. By providing children with quality education, the foundation helps to build a brighter future for the communities they serve.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div style={{ height: "95%" }} className={`${open === "p4" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p4")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/food-donation.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Food Donation</h4>
                                <p className="m-b20">Veni Foundation also provides food donations to the poor, homeless, and elderly to help reduce hunger and food insecurity in their communities. The food donation program helps provide healthy and nutritious meals to those struggling to make ends meet.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div style={{ height: "95%" }} className={`${open === "p5" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p5")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/farmer.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15"> Support Farmers</h4>
                                <p className="m-b20">They support farmers by providing them with training, resources, and access to markets to help them improve crop yields and increase their income. The foundation helps farmers to increase their yields and improve their livelihoods.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div style={{ height: "95%" }} className={`${open === "p6" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30 border border-dark"}`} onMouseOver={() => setOpen("p6")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><img src='/images/icon/healthcare.png' alt='..Load' /></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Medical Support</h4>
                                <p className="m-b20">The NGO also provides medical support by setting up health clinics and providing access to medical care, particularly in remote and underserved areas. Medical support provided by the foundation helps to improve the overall health and well-being of the communities they serve.</p>
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