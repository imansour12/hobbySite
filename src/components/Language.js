import React from "react";
import { ListGroup } from "react-bootstrap";


function Language(props) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <span>
          <img
            alt={props.alt}
            style={{ width: "20px" }}
            src={props.source}
          />{" "}
          {props.language}
        </span>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Language;
