import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

//import "bootstrap/dist/css/bootstrap.min.css"

export default function Header() {
    const links = [
        {
            name: "home",
            add: "/",
        },
        {
            name: "about",
            add: "/about"
        },
        {
            name: "menu",
            add: "/menu"
        },
        {
            name: "reservation",
            add: "/reservations"
        },
        {
            name: "order",
            add: "/order"
        },
        {
            name: "login",
            add: "login"
        }
    ]
    return (
        <div id="Header">
            <Navbar style={{backgroundColor: "white"}} data-bs-theme="light" className="py-3">
                <Container>
                    <Navbar.Brand href="/" className="">
                        Little Lemon
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-75 d-flex justify-content-evenly">
                            {links.map((link, index)=> (
                                <Nav.Link href={link.add} key={index} className="text-black">
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