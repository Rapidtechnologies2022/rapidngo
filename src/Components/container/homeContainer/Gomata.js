import React from 'react'
import { Link } from 'react-router-dom'

function Gomata() {
    return (
        <section className="content-inner about-wraper-1" style={{ "backgroundImage": "url(images/background/.png)", "backgroundSize": "contain", "backgroundPosition": "center right", "backgroundRepeat": "no-repeat" }}>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="section-head style-3">
                            {/*      <h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6> */}
                            <h2 className="title m-b20">Gauraksha/<span className="text-primary">Seva  </span> </h2>
                            <p>It is our responsibility to protect our cows. Cows represent Mother Earth, a source of goodness; their milk nourishes all creatures.</p>
                            <p> Under the guidance of the Veni Foundation, free Homeopathy medicines are given to cows suffering from Lumpy skin disease. </p>
                        </div>
                        {/* <ul className="list-check primary m-b30">
                            <li>When a child gets access to good food</li>
                            <li>We are Reliable.</li>
                            <li>WWhen a child gets access to good food</li>
                            <li>We are cost Effective.</li>
                        </ul> */}
                        <Link to="/volunteer"><a className="btn btn-primary rounded-xl gradient">Become Volunteer</a></Link>
                        {/*    <Link to="about-us-2"><a className="btn btn-primary rounded-xl gradient ml-3">View Programs</a></Link> */}
                    </div>
                    <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className=" right">
                            <img src="/images/about/gow-mata.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gomata