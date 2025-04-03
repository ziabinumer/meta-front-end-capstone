import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"

import logo from "../../assets/logo-white.png";
import { NavLinks, SocialLinks, ContactDetail } from "./Links";

export default function Footer() {
    return (
        <footer className="text-light py-5" style={{ backgroundColor: "#495E57" }}>
            <Container>
                <Row className="gy-4 align-items-center text-center text-md-start">
                    
                    {/* Logo Section */}
                    <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start">
                        <Image src={logo} className="me-md-4" style={{ width: "100px" }} />
                    </Col>

                    {/* Sitemap Section */}
                    <Col xs={12} md={3}>
                        <h5 className="fw-bold">Sitemap</h5>
                        <ListGroup className="list-unstyled">
                            {NavLinks.map((link, index) => (
                                <Link to={link.add} className="navLink">
                                    {link.name}
                                </Link>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Contact Details */}
                    <Col xs={12} md={3}>
                        <h5 className="fw-bold">Contact</h5>
                        <ListGroup className="list-unstyled">
                            {ContactDetail.map((item, index) => (
                                <ListGroup.Item key={index} className="bg-transparent border-0 text-light d-flex align-items-center justify-content-center justify-content-md-start">
                                    <FontAwesomeIcon icon={item.icon} className="me-3" />
                                    <span>{item.name}</span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Social Links */}
                    <Col xs={12} md={3}>
                        <h5 className="fw-bold">Follow Us</h5>
                        <ListGroup horizontal className="justify-content-center justify-content-md-start">
                            {SocialLinks.map((link, index) => (
                                <ListGroup.Item key={index} className="bg-transparent border-0">
                                    <a href={link.path} className="text-light text-decoration-none">
                                        <FontAwesomeIcon icon={link.icon} size="lg" />
                                    </a>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
}
