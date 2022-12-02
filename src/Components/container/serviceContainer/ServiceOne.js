import React, { useState } from 'react'

function ServiceOne() {
    const [open, setOpen] = useState("p2")

    return (
        <section className="content-inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                        <div className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><i className="flaticon-office"></i></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Web Development</h4>
                                <p className="m-b20">Rapid Technologgy is having a strong Web Development wing, which is enriched with various technologies i.e. Ajax, ASP, ASP.NET, JavaScript, HTML, CSS, PHP, Node.Js, Angular Js, Java, etc. We are using various frameworks as per our clients’ requirements.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><i className="flaticon-coding"></i></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Mobile Development</h4>
                                <p className="m-b20">The enterprise world today has been taken over by a storm of mobile applications developed on various platforms such as the iOS and Android. There are numerous apps coming into the app market every day.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><i className="flaticon-laptop"></i></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Digital Marketing</h4>
                                <p className="m-b20">We are top digital marketing agency that takes time to understand your business and create a strategy to accomplish your commercial objectives. By working in partnership we can help you accelerate growth online and increase your digital marketing returns.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className={`${open === "p4" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><i className="flaticon-dollar"></i></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">Consulting Services</h4>
                                <p className="m-b20">An IT consultant works in partnership with clients, advising them how to use information technology in order to meet their business objectives or overcome problems. They work to improve the structure and efficiency of IT systems in various organisations.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className={`${open === "p5" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><i className="flaticon-line-chart"></i></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15"> Maintenance & Support</h4>
                                <p className="m-b20"> Rapid Technologies Software maintenance and support teams are competent and qualified engineers concentrating solely on maintenance and support activities.</p>
                                {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className={`${open === "p6" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
                            <div className="icon-bx">
                                <span className="icon-cell"><i className="flaticon-help"></i></span>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-title m-b15">24X7 Support</h4>
                                <p className="m-b20">What are the options available, manage it yourself or ask a supplier to do it for you. Ensuring the right strategy is in place that fits the goals of your organisation.</p>
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