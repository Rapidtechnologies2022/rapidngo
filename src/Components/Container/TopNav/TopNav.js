import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function TopNav() {
    return (
        <div>
            <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg" >
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home"> <img className="logo" src="images/logo/logo.png" /> </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey="/" className="me-auto nav ">
                            <NavLink className="nav-link" as={Link} to='/' >Home</NavLink>
                            <NavDropdown title="About" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/about'>About Ngo </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" as={Link} to='/programs'>Programs</NavLink>
                            <NavLink className="nav-link" as={Link} to='/blog'>Blogs</NavLink>
                            <NavLink className="nav-link" as={Link} to='/contact'>Contact Us</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className="nav-link-buy" as={Link} to='/contact'> Make A Donation</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
