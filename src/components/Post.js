import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import "./Post.css";

function Post(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className={width > breakpoint ? "post" : "postSmolScreen"}>
      <Card>
        <Card.Body>
          <h1> {props.post.title}</h1>
        </Card.Body>
        <Card.Body>
          <h3> {props.post.description}</h3>
        </Card.Body>
        <Card.Body>
          <sub> {props.post.user}</sub>
        </Card.Body>
        <Image src={props.post.image} />
      </Card>
    </div>
  );
}

export default Post;
