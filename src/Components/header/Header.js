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
                                    <Link to="/donate"><a className="btn btn-corner" style={{ backgroundColor: "#0d4470", color: "#fff" }}><i className="fa fa-angle-right m-r10"></i>Donate Now</a></Link>
                                </div>
                            </div>
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                                <div className="logo-header">
                                    <Link to="/"><a><img src="/images/veniLogo.PNG" alt="" /></a></Link>
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
                                    <li><Link to="/volunteer"><a>Volunteers</a></Link></li>
                                    <li className={`${open === "about" ? "open" : ""}`}><a onClick={() => setOpen("about")}><span>Gallery</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><Link to="/images"><a> Images</a></Link></li>
                                            <li><Link to="/videos"><a>Videos</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact"><a>Contact us</a></Link></li>
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <a href="https://www.facebook.com/profile.php?id=100089384897499" target="_blank"><a className="fa fa-facebook"></a></a>
                                        <a href="https://twitter.com/venifoundation" target="_blank"><a className="fa fa-twitter"></a></a>
                                        <a href="https://instagram.com/venifoundation9?igshid=OGQ2MjdiOTE=" target="_blank"><a className="fa fa-instagram"></a></a>
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