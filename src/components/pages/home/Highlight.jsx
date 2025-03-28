import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import MenuItemCard from "./MenuItemCard";

export default function Highlight(props) {
    const menu = props.menu;
    return (
        <div id="Highlights" style={{minHeight: "640px", paddingBottom: "24px"}}>
            <Container className="d-flex flex-row justify-content-between p-5 m-2">
                <h2 style={{fontSize: "48px"}}>Today's Specials!</h2>
                <Button className="Button btn btn-warning px-4">Order Online</Button>
            </Container>
            <Container className="d-flex flex-row justify-content-around">
                {menu.map((item, index) => (
                    <MenuItemCard item={item} key={index}/>
                ))}
            </Container>
        </div>
    )
}