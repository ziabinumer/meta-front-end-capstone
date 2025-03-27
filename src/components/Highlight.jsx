import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function Highlight(props) {
    const menu = props.menu;
    return (
        <div id="Highlights" style={{minHeight: "640px;", paddingBottom: "24px"}}>
            <Container className="d-flex flex-row justify-content-between p-5 m-2">
                <h2 style={{fontSize: "48px"}}>Today's Specials!</h2>
                <Button className="Button btn btn-warning px-4">Order Online</Button>
            </Container>
            <Container className="d-flex flex-row justify-content-around">
                {menu.map(item => (
                    <Card style={{width: "22rem", maxHeight: "450px"}}>
                        {}
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
                                <Button variant="primary">
                                    Order Online
                                </Button>
                            </Container>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
}