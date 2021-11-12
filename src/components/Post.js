import React from "react";
import { Card } from "react-bootstrap";

function Post(props) {
  console.log(props);
  return (
    <div>
      <Card>
        <Card.Body>
          <h1> {props.moment.title}</h1>
        </Card.Body>
        <Card.Body>
          <h3> {props.moment.description}</h3>
        </Card.Body>
        <Card.Body>
          <sub> {props.moment.user}</sub>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
