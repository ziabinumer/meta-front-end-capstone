import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import TestimonialItem from "./TestimonialItem"

export default function Testimonial() {
    const testimonials = [
        {
            stars: 4,
            title: "Something",
            body: "Something lengthy that explains what the reviewer" +
                    "felt about it",
            name: "ReviewName",
            type: "Customer"
        },
        {
            stars: 4,
            title: "Something",
            body: "Something lengthy that explains what the reviewer" +
                    "felt about it",
            name: "ReviewName",
            type: "Customer"
        },
        {
            stars: 4,
            title: "Something",
            body: "Something lengthy that explains what the reviewer" +
                    "felt about it",
            name: "ReviewName",
            type: "Customer"
        }
    ]
    return (
        <div id="Testimonial" className="d-flex align-items-center" style={{minHeight: "550px", marginTop: "15px"}}>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-light pb-4" style={{fontSize:"64px"}}> Testimonials </h1>
                <Container className="d-flex flex-row justify-content-center w-100 h-100">
                    {testimonials.map((item, index )=> (
                        <TestimonialItem item={item} key={index}/>
                    ))}
                </Container>
            </Container>
        </div>
    )
}