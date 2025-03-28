import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import ChefImg from "../../../assets/chef.webp"

export default function About() {
    return (
        <div id="About" className="d-flex flex-row justify-content-between align-items-center p-4" style={{ height: "500px", padding: "15rem" }}>
            {/* Left Container */}
            <Container className="w-50">
                <h2>Little Lemon</h2>
                <h4 className="text-muted">Chicago</h4>
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant that brings 
                    authentic flavors to the heart of Chicago. Our mission is to serve 
                    fresh, delicious, and healthy dishes inspired by traditional recipes.
                </p>
            </Container>

            {/* Right Container with Overlapping Images */}
            <Container className="w-50 position-relative d-flex justify-content-center">
                <Image 
                    src={ChefImg} 
                    className="w-25" 
                    rounded
                />
                <Image 
                    src="/images/headerPic.webp" 
                    className="" 
                    rounded
                />
            </Container>
        </div>
    );
}
