import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { NavLinks as links } from "./Links";

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" style={{ backgroundColor: "white" }} data-bs-theme="light" className="py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="w-25">
                        <Image src={logo} style={{ width: "50%" }} alt="Logo" />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none" />

                    <Navbar.Offcanvas id="offcanvasNavbar" placement="start" className="d-lg-none">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="d-flex flex-column">
                                {links.map((link, index) => (
                                    <Nav.Link as={Link} to={link.add} key={index} className="navLink">
                                        {link.name}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* Desktop menu*/}
                    <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
                        <Nav className="w-75 d-flex justify-content-evenly">
                            {links.map((link, index) => (
                                <Nav.Link as={Link} to={link.add} key={index} className="navLink">
                                    {link.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
