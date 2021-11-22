import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./SignInContainer.css";
import loading from "../assets/loading2.gif";
import axios from "axios";

const saveJwt = (token) => {
  localStorage.setItem("auth-token", token);
};

//https://dev.to/nilanth/how-to-secure-jwt-in-a-single-page-application-cko
//Make sure to store JWTs in memory later when rolling out prod

const onFormSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries());
  const res = await axios.post(
    "https://fakenewsnetwork.herokuapp.com/api/user/login",
    formDataObj,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const token = res.data;
  saveJwt(token);
  alert("Signed in successfully, please go to homepage NOW!!");
};

function SignInContainer() {
  const [loadingStatus, setLoadingStatus] = useState(false);
  return (
    <div className="signIn">
      <Card className="main" body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button
            variant="primary"
            type="submit"
            onClick={() => setLoadingStatus(true)}
          >
            Submit
          </Button>
          <img
            style={{
              width: "40px",
              height: "40px",
              visibility: loadingStatus ? "visible" : "hidden",
            }}
            src={loading}
            alt="loading..."
          />
        </Form>
      </Card>
    </div>
  );
}

export default SignInContainer;
