import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import heroImg from "../../../assets/headerPic.webp"

import "../../styles/styles.css"

export default function Hero() {
    const data = {
        title: "Little Lemon",
        city: "Chicago",
        description: 
        "Welcome to Little Lemon, where fresh Mediterranean flavors meet modern dining." + 
        "Enjoy authentic, handcrafted dishes made with the finest ingredients.",
        buttonTitle: "Reserve a Table",
        imageSrc: 
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
    return (
        <section className="d-flex align-items-center text-center text-white" id="Hero"
            style={{ height: "405px", backgroundColor: "rgba(73, 94, 87, 1)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Container className="d-flex flex-row heroContainerL2">
                <Container className="text-start d-flex flex-column align-items-start mb-0">
                    <h1 className="title b-4" >
                        {data.title}
                    </h1>
                    <span className="mt-0 pt-0 city" color="white">Chicago</span>
                    <p>
                        {data.description}
                    </p>

                        <Button className="btn btn-warning w-50 pt-2 pb-2 px-5 button">
                            {data.buttonTitle}
                        </Button>
                </Container>
                <Container>
                    <Image src={heroImg} className="heroImg"></Image>
                </Container>
            </Container>
        </section>
    )
}