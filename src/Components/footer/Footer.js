import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="site-footer style-1" id="footer" style={{ "backgroundImage": "url(images/background/bg10.png)" }}>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-md-4">
                                    <div className="footer-logo">
                                        <a href="/"><img src="images/rapid_logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="icon-bx-wraper left m-b10">
                                        <div className="icon-lg">
                                            <a href="javascript:void(0);" className="icon-cell">
                                                <i className="flaticon-email"></i>
                                            </a>
                                        </div>
                                        <div className="icon-content">
                                            <p>+91 9966619759<br />info@rapidtech.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="icon-bx-wraper left m-b10">
                                        <div className="icon-lg">
                                            <a href="javascript:void(0);" className="icon-cell">
                                                <i className="flaticon-location"></i>
                                            </a>
                                        </div>
                                        <div className="icon-content">
                                            <p>Madhapur Road Hitech City, Hyderabad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="widget widget_about">
                                    <h5 className="footer-title">About Us</h5>
                                    <p> Rapid Technologies is an Indian based IT experts who combine an intimate knowledge of today’s cutting edge technologies. </p>
                                    <div className="dlab-social-icon">
                                        <ul>
                                            <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/" target="_blank"></a></li>
                                            <li><a className="fa fa-instagram" href="https://www.instagram.com/" target="_blank"></a></li>
                                            <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">Our links</h5>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/blogs">Blogs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">Our Services</h5>
                                    <ul>
                                        <li><Link to="/services">Web Development</Link></li>
                                        <li><Link to="/services">Digital Marketing</Link></li>
                                        <li><Link to="/services">Consulting Services </Link></li>
                                        <li><Link to="/services">Training & Placement</Link></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">Other links</h5>
                                    <ul>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/our/clients">Our Clients</Link></li>
                                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer bottom part --> */}
                <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <span className="copyright-text">Copyright © 2021 <a href="https://rapidtech.com/" target="_blank">Rapid Technologies</a>. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer