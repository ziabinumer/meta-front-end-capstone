import {Link} from "react-router-dom"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export default function MenuItemCard(props) {
    const item = props.item
    return (
            <Card style={{width: "22rem", maxHeight: "450px"}} key={props.index}>
                <Card.Img variant="top" src={item.src}/>
                <Card.Body>
                    <Card.Title className="d-flex flex-row justify-content-between">
                        <span>{item.name}</span>
                        <span className="text-danger" style={{marginRight:"8px"}}>{item.price}</span>
                    </Card.Title>
                    <Card.Text>
                        {item.text}
                    </Card.Text>
                    <Container className="w-100 d-flex justify-content-center">
                        <Button as={Link} to="/order" variant="primary">
                            Order Online
                        </Button>
                    </Container>
                </Card.Body>
            </Card>
    )
}