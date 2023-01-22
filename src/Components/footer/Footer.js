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
                                <div className="col-xl-4 col-md-4">
                                    <div className="footer-logo">
                                        <a href="/"><img src="images/veniLogo.PNG" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 col-sm-6">
                                    <div className="icon-bx-wraper left m-b10">
                                        <div className="icon-lg">
                                            <a href="javascript:void(0);" className="icon-cell">
                                                <i className="flaticon-email"></i>
                                            </a>
                                        </div>
                                        <div className="icon-content">
                                            <p>+91 9912162338<br />info@venifoundation.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="icon-bx-wraper left m-b10">
                                        <div className="icon-lg">
                                            <a rel="noreferrer" href="javascript:void(0);" className="icon-cell">
                                                <i className="flaticon-location"></i>
                                            </a>
                                        </div>
                                        <div className="icon-content">
                                            <p>Y. Kothapalli, East Godavari District, Andhra Pradesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="widget widget_about">
                                    <h5 className="footer-title">About Us</h5>
                                    <p> Veni Foundation is a non-profit organization dedicated to improving the lives of people in need. </p>
                                    <div className="dlab-social-icon">
                                        <ul>
                                            <li><a className="fa fa-facebook" href="https://www.facebook.com/profile.php?id=100089384897499" target="_blank" rel="noreferrer"></a></li>
                                            <li><a className="fa fa-instagram" href="https://instagram.com/venifoundation9?igshid=OGQ2MjdiOTE=" target="_blank" rel="noreferrer"></a></li>
                                            <li><a className="fa fa-twitter" href="https://twitter.com/venifoundation" target="_blank" rel="noreferrer"></a></li>
                                            <li><a className="fa fa-youtube-play" href="https://www.youtube.com/channel/UCypX0xDybghgFjZBP9SS6Sw/" target="_blank" rel="noreferrer"></a></li>
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
                                        <li><Link to="/services">Women Empowerment</Link></li>
                                        <li><Link to="/services">Child Education</Link></li>
                                        <li><Link to="/services">Food Donation </Link></li>
                                        <li><Link to="/services">Medical Support</Link></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                <div className="widget widget_services">
                                    <h5 className="footer-title">Other links</h5>
                                    <ul>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/volunteer">Volunteers</Link></li>
                                        <li><Link to="/privacy">Privacy</Link></li>
                                        <li><Link to="/Terms">Terms & Conditions</Link></li>
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
                                <span className="copyright-text">Copyright © 2023 <a href="https://venifoundation.com/" target="_blank">Veni Foundation</a>. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer