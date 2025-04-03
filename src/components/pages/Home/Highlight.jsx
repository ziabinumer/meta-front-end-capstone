import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MenuItemCard from "./MenuItemCard";

export default function Highlight(props) {
    const menu = props.menu;
    return (
        <section id="Highlights" style={{minHeight: "640px", paddingBottom: "24px"}}>
            <Container className="py-5">
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} md={8}>
                        <h2 style={{fontSize: "clamp(32px, 5vw, 48px)"}}>Today's Specials!</h2>
                    </Col>
                    <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
                        <Button className="btn btn-warning px-4">Order Online</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex flex-wrap justify-content-center gap-4">
                {menu.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex justify-content-center">
                        <MenuItemCard item={item} />
                    </Col>
                ))}
            </Container>
        </section>
    );
}
