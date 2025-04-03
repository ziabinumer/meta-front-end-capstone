import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import ChefImg from "../../../assets/chef.webp";
import HeaderImg from "../../../assets/headerPic.webp";

export default function About() {
    return (
        <section id="About" className="d-flex flex-column flex-md-row justify-content-between align-items-center px-4 py-5" 
            style={{ minHeight: "500px", textAlign: "center" }}>

            <Container className="w-100 w-md-50 text-md-start">
                <h2 className="fw-bold" style={{ fontFamily: "Lora, serif", fontSize: "2.5rem" }}>Little Lemon</h2>
                <h4 className="text-muted" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}>Chicago</h4>
                <p style={{ fontSize: "1.1rem", fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}>
                    Little Lemon is a family-owned Mediterranean restaurant bringing 
                    authentic flavors to the heart of Chicago. Our mission is to serve 
                    fresh, delicious, and healthy dishes inspired by traditional recipes.
                </p>
            </Container>

            <Container className="w-100 w-md-50 position-relative d-flex justify-content-center mt-4 mt-md-0">
                <div className="position-relative">
                    <Image 
                        src={ChefImg} 
                        className="rounded shadow-lg position-absolute top-0 start-0" 
                        style={{ width: "180px", zIndex: "2", transform: "translate(-20px, 20px)" }}
                    />
                    <Image 
                        src={HeaderImg} 
                        className="rounded shadow-lg position-relative" 
                        style={{ width: "220px", zIndex: "1" }}
                    />
                </div>
            </Container>
        </section>
    );
}
