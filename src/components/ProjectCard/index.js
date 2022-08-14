import { Card } from "react-bootstrap"
export function ProjectCard({name, img, description}){
    return (
        <Card style = {{width:"600px", margin: "50px"}}>
            <Card.Img src = {img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}