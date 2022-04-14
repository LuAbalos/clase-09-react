import ItemCount from "./ItemCount";
import React from "react";
import {CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected" + qty + "items.")
    }

    return (
        <>
        {
        <div className="imagenes">
            <CardGroup>
                <Card key={item.id}>
                    <CardImg className="imagen"
                        alt="Card image cap"
                        src={item.img}/>
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.nombre}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">
                            {item.descripcion}
                        </CardSubtitle>
                        <CardText>
                            {item.precio}
                        </CardText>
                        <CardText>
                            {item.stock} unidades en stock
                        </CardText>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
        }
        </>
    );
}

export default ItemDetail;