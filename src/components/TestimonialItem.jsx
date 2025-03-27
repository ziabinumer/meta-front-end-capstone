import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar, faUser} from "@fortawesome/free-solid-svg-icons"

export default function TestimonialItem(props) {
    const item = props.item
    const stars = Array.from({ length: item.stars }, (_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ));
    /*
        stars
        title
        body
        name
        type
    */
    return (
        <>
            <Card className="m-3" style={{width: "20rem", backgroundColor: "white", borderRadius: "45px"}}>
                <Card.Body>
                    <Card.Header style={{border:0}}>
                    {stars}
                    </Card.Header>
                    <Card.Title className="d-flex flex-column px-3 pt-1 m-0" style={{fontSize: "16px", fontWeight:"bold"}}>
                        {item.title}
                    </Card.Title>
                    <Card.Body className="mt-1 pt-1 pb-1 " style={{fontSize: "13px"}}>
                        {item.body}
                    </Card.Body>
                    <Card.Footer className="d-flex flex-row justify-content-between align-items-center pt-1 mt-1 pr-4" style={{border:0}}>
                        
                        <Container className="d-flex flex-column">
                            <span style={{fontSize:"15px"}}>{item.name}</span>
                            <span style={{fontSize:"13px"}}>{item.type}</span>
                        </Container>
                        <FontAwesomeIcon icon={faUser}/>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}