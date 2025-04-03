import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialItem({ item }) {
    const stars = Array.from({ length: item.stars }, (_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" />
    ));

    return (
        <Card className="w-100" style={{ maxWidth: "20rem", backgroundColor: "white", borderRadius: "45px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
            <Card.Body>
                <Card.Header className="pb-2 text-center bg-transparent border-0">
                    {stars}
                </Card.Header>
                <Card.Title className="text-center px-3 pt-1 m-0 fw-bold" style={{ fontSize: "16px" }}>
                    {item.title}
                </Card.Title>
                <Card.Body className="mt-1 pt-1 pb-1 text-center" style={{ fontSize: "13px" }}>
                    {item.body}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center px-3 bg-transparent border-0">
                    <Container className="d-flex flex-column">
                        <span className="fw-bold" style={{ fontSize: "15px" }}>{item.name}</span>
                        <span className="text-muted" style={{ fontSize: "13px" }}>{item.type}</span>
                    </Container>
                    <FontAwesomeIcon icon={faUser} className="text-muted" size="lg" />
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}
