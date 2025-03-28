import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"

import logo from "../../assets/logo.png"

import { Link } from "react-router-dom";


//import "bootstrap/dist/css/bootstrap.min.css"

export default function Header() {
    const links = [
        {
            name: "Home",
            add: "/",
        },
        {
            name: "About",
            add: "/about"
        },
        {
            name: "Menu",
            add: "/menu"
        },
        {
            name: "Reservation",
            add: "/reservation"
        },
        {
            name: "Order",
            add: "/order"
        },
        {
            name: "Login",
            add: "login"
        }
    ]
    return (
        <div id="Header">
            <Navbar style={{backgroundColor: "white"}} data-bs-theme="light" className="py-3">
                <Container>
                    <Navbar.Brand href="/" className="w-25">
                        <Image src={logo} className="" style={{ width: "50%"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-75 d-flex justify-content-evenly">
                            {links.map((link, index)=> (
                                <Nav.Link as={Link} to={link.add} key={index} className="navLink">
                                    {link.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}