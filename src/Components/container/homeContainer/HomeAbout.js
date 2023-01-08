import React from 'react'
import { Link } from 'react-router-dom'

function HomeAbout() {
    return (
        <section className="content-inner about-wraper-1" style={{ "backgroundImage": "url(images/background/bg15.png)", "backgroundSize": "contain", "backgroundPosition": "center right", "backgroundRepeat": "no-repeat" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="dz-media left">
                            <img src="images/about/pic1.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="section-head style-3">
                       {/*      <h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6> */}
                            <h2 className="title m-b20"><span className="text-primary">Donate vitamin B12 </span>  supply program</h2>
                            <p>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <ul className="list-check primary m-b30">
                            <li>When a child gets access to good food</li>
                            <li>We are Reliable.</li>
                            <li>WWhen a child gets access to good food</li>
                            <li>We are cost Effective.</li>
                        </ul>
                        <Link to="/donate"><a className="btn btn-primary rounded-xl gradient">Donate Now</a></Link>
                        <Link to="/services"><a className="btn btn-primary rounded-xl gradient ml-3">View Programs</a></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout