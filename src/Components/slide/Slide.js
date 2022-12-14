import React from 'react'
import { Link } from 'react-router-dom'

function Slide() {
    return (
        <>
            <div className="banner-one" style={{ "backgroundImage": "url(images/main-slider/slider1/pic5.png)" }}>
                <div className="container">
                    <div className="banner-inner">
                        <div className="img1"><img src="images/main-slider/slider1/pic3.png" alt="" /></div>
                      {/*   <div className="img2"><img src="images/main-slider/slider1/pic4.png" alt="" /></div>
                        */} <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="banner-content">
                                  {/*   <h6 data-wow-duration="1s" data-wow-delay="0.5s" className="wow fadeInUp sub-title text-primary">We Create Ideas</h6> */}
                                    <h1 data-wow-duration="1.2s" data-wow-delay="1s" className="wow fadeInUp "> <span className="text-primary">Give a helping hand </span> to those who need it!</h1>
                                    <p data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp m-b30 text-white">When a child gets access to good food, it can change just about everything.</p>
                                    <a href="/services" ><a data-wow-duration="1.6s" data-wow-delay="2s" className="wow fadeInUp btn btn-link d-inline-flex align-items-center" style={{color:"#fff"}} ><i className="fa fa-angle-right m-r10"></i>Ongoing programs</a></a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
                                    <img className="move-1" src="images/move/pic.png" alt=""  />
                                  {/*   <img className="move-2" src="images/move/pic2.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide