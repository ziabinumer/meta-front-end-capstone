import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialItem from "./TestimonialItem";

export default function Testimonial() {
    const testimonials = [
        {
            stars: 4,
            title: "Amazing Service",
            body: "The experience was fantastic! The food was delicious and the ambiance was perfect.",
            name: "Emily R.",
            type: "Customer"
        },
        {
            stars: 5,
            title: "Highly Recommend",
            body: "One of the best dining experiences I've had. The staff was friendly and professional.",
            name: "James L.",
            type: "Customer"
        },
        {
            stars: 4,
            title: "Will Visit Again",
            body: "The flavors were on point! A great place for a family dinner or a date night.",
            name: "Sophia M.",
            type: "Customer"
        }
    ];

    return (
        <section id="Testimonial" className="py-5 d-flex align-items-center" style={{ minHeight: "550px", marginTop: "15px" }}>
            <Container className="text-center">
                <h1 className="text-light pb-4" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>Testimonials</h1>
                <Row className="gy-4 justify-content-center">
                    {testimonials.map((item, index) => (
                        <Col xs={12} md={6} lg={4} key={index} className="d-flex justify-content-center">
                            <TestimonialItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
