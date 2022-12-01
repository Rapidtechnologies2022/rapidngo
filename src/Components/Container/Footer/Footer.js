import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function Footer() {
    return (
        <div className="container-fluid footer-container " >
            <Container  className="footer-container-one" >
                <Row xl={12} >
                    <Col xl={3} lg={3} md={4} sm={5} xs={5} >
                        <img className="footer-image" src="images/logo/logo.png" />
                        <p className='footerpara pt-3'>When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                        <div className="footer-icon-div" >
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <img className="footer-icon" src="images/icons/facebook.png" /> </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <img className="footer-icon" src="images/icons/instagram.png" /> </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"> <img className="footer-icon" src="images/icons/youtube.png" /> </a>
                        </div>
                    </Col>
                  <Col xl={3} lg={3} md={4} sm={7} xs={7} >
                        <ul className="footer-link" >
                            <h3 className="footer-quick-link" >Navigation</h3>
                            <li className="footer-link-a"> <a href="">Home</a> </li>
                            <li className="footer-link-a"><a href="">About</a> </li>
                            <li className="footer-link-a"><a href="">Services</a> </li>
                            <li className="footer-link-a"><a href="">Blog</a> </li>
                            <li className="footer-link-a"><a href="">Contact</a> </li>
                        </ul>
                    </Col>
                    <Col className="footer-col-3" xl={3} lg={3} md={4} sm={7} xs={7} >
                        <ul className="footer-link">
                            <h3 className="footer-quick-link">Contact Us</h3>
                            <li> 4486 Richards Avenue,</li>
                            <li> Modesto CA - 95354 </li>
                            <li> Hyderabad,500047 </li>
                            <li>Phone: +9199876543210 </li>
                            <li>Email: info@ngo.com </li>
                        </ul>
                    </Col>
                    <Col className="footer-col-4" xl={3} lg={3} md={4} sm={5} xs={5} >
                        <h3 className="footer-quick-link">Support</h3>
                     <p className='footerpara pt-3'>When a child gets access to good food, it can change.</p>
                     <Button variant="danger" className='footbutton'>Join Us Today</Button>
                    </Col>
                </Row>
                <hr/>
                <Row className="mt-4">
                    <Col className="text-center" >
                    <span> © All Rights Reserved 2022 </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
