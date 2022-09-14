import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


function Item(props) {
  const [fontSize, setFontsize] = useState(5)

    return (
      <Card style={{ fontSize: `${fontSize}px` }} className="cards">
      <Card.Img variant="top" src={props.recipe.imgUri} />
      <Card.Body>
        <Card.Title>{props.recipe.name}</Card.Title>
        <Card.Text classname="text">
        {props.recipe.description}
        </Card.Text>
         <div class="btn-wrapper text-center">
        <Button variant="primary me-1" onClick={() => setFontsize(fontSize + 12)} clasname="button">Zvětšit</Button>
        <Button variant="btn btn-warning" onClick={() => setFontsize(fontSize - 12)} clasname="buttontwo">Zmenšit</Button>
        </div>
      </Card.Body>
    </Card>
    );
  }

  
export default Item;
