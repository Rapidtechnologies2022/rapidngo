import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");

    return (
        <>
            {/* <!-- Header --> */}
            <header className="site-header header-transparent text-black mo-left" id="fix-header">
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg is-fixed">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link to="/"><img src="/images/veniLogo.PNG" alt="" /></Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link to="/contact"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Contact Us</a></Link>
                                </div>
                            </div>
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                                <div className="logo-header">
                                    <Link to="/"><a><img src="/images/rapid_logo.png" alt="" /></a></Link>
                                </div>
                                <ul className="nav navbar-nav navbar">
                                    <li><Link to="/"><a>Home</a></Link></li>
                                    <li><Link to="/about"><a>About Us</a></Link></li>
                                    <li className={`${open === "about" ? "open" : ""}`}><a onClick={() => setOpen("about")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><Link to="/services"><a>Our Services</a></Link></li>
                                            {/* <li><Link to="/service/details"><a>Service Details</a></Link></li> */}
                                        </ul>
                                    </li>
                                    <li><Link to="/our/clients"><a>Our Clients</a></Link></li>
                                    <li><Link to="/blogs"><a>Blogs</a></Link></li>
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <a href="https://en-gb.facebook.com/" target="_blank"><a className="fa fa-facebook"></a></a>
                                        <a href="https://twitter.com/login?lang=en" target="_blank"><a className="fa fa-twitter"></a></a>
                                        <a href="https://www.aedin.com/login" target="_blank"><a className="fa fa-aedin"></a></a>
                                        <a href="https://www.instagram.com/" target="_blank"><a className="fa fa-instagram"></a></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
            {/* <!-- Header End --> */}

        </>
    )
}

export default Header