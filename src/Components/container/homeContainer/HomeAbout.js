import React from 'react'
import { Link } from 'react-router-dom'

function HomeAbout() {
    return (
        <section className="content-inner about-wraper-1" style={{ "backgroundImage": "url(images/background/bg15.png)", "backgroundSize": "contain", "backgroundPosition": "center right", "backgroundRepeat": "no-repeat" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="dz-media left">
                            <img src="images/about/pic1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="section-head style-3">
                            <h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
                            <h2 className="title m-b20">We Have Creative Team To Build Your Website Better</h2>
                            <p>Rapid Technologies is an emerging Next Generation software development company, specializing in cutting edge business solutions utilizing web and mobile application development. We are leading a new generation of Indian based IT experts who combine an intimate knowledge of today’s cutting edge technologies with the business savvy needed to create and build strategic technology infrastructure and applications.</p>
                        </div>
                        <ul className="list-check primary m-b30">
                            <li>We have Experience Team.</li>
                            <li>We are Reliable.</li>
                            <li>We deliver On Time.</li>
                            <li>We are cost Effective.</li>
                        </ul>
                        <Link to="about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout