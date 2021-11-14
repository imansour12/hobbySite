import React from "react";
import { Card } from "react-bootstrap";

function Post(props) {
  return (
    <div
      style={{ marginLeft: "10%", marginRight: "10%", marginBottom: "5px " }}
    >
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
