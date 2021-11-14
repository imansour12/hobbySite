//new post button
import React from "react";
import { Button } from "react-bootstrap";

function NewPost() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100",
        zIndex: "100",
        right: "0",
        marginRight: "10px",
        marginBottom: "10px",
      }}
    >
      <Button className="rounded-circle" variant="outline-light">
        Light
      </Button>
    </div>
  );
}

export default NewPost;
