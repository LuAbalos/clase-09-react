import ItemCount from "./ItemCount";
import React, { useState, } from "react";
import {CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import Events from "./Events";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0)
    const onAdd = (qty) => {
        alert("You have selected" + qty + "items.");
        setItemCount(qty);
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
                    </CardBody>
                    
                </Card>
            </CardGroup>
            {
             itemCount === 0
                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                :  <Button>  <Link to='./Events'>Detalles</Link> </Button>
            }
        </div>
        }
        </>
    );
}

export default ItemDetail;