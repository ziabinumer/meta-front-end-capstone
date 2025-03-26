import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

import heroImg from "../assets/headerPic.webp"

import "./styles/styles.css"

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
        <div className="d-flex align-items-center text-center text-white"
            style={{ height: "509px", backgroundColor: "rgba(73, 94, 87, 1)", backgroundSize: "cover", backgroundPosition: "center" }} id="Hero">
            <Container className="d-flex flex-row">
                <Container className="text-start d-flex flex-column align-items-start mb-0">
                    <h1 className="title b-4" >
                        {data.title}
                    </h1>
                    <caption className="mt-0 pt-0" color="white">Chicago</caption>
                    <p>
                        {data.description}
                    </p>
                    <div className="d-flex justify-content-start">
                        <Button className="btn btn-warning w-100 pt-2 pb-2 px-5 button">
                            {data.buttonTitle}
                        </Button>
                    </div>
                </Container>
                <Container>
                    <Image src={heroImg}></Image>
                </Container>
            </Container>
        </div>
    )
}