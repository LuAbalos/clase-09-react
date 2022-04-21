import React from "react";
import {CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

export default function Item ({id, nombre, descripcion, precio, img, category}) {
    
    return (
        <div>
            <CardGroup className="imagenes">
                <Card key={id}>
                    <CardImg className="imagen"
                    alt="Card image cap"
                    src={img}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        {nombre}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6">
                        {descripcion}
                    </CardSubtitle>
                    <CardText>
                        {precio}
                    </CardText>
                    <CardText>
                        {category}
                    </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}