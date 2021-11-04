import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./SignInContainer.css";
import axios from "axios";

const onFormSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries());
  console.log(formDataObj);
  const res = await axios.post(
    "https://fakenewsnetwork.herokuapp.com/api/user/register",
    formDataObj,
    {
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
      },
    }
  );

  console.log(res.data.user);
  alert("Account created successfully.  Please go to Sign In.");
};

function SignUpContainer() {
  const [warningMessage, setWarningMessage] = useState(" ");
  return (
    <div>
      <div className="signIn">
        <Card className="main" body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
              <Form.Text className="text-muted">
                Don't reuse your password, I didn't spend a lot of time on
                security
              </Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Button
              variant="primary"
              type="submit"
              onClick={() => setWarningMessage("Submitting")}
            >
              Submit
            </Button>
          </Form>
          <div style={{ color: "red", fontWeight: "bold" }}>
            {warningMessage}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SignUpContainer;
