import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./SignInContainer.css";
const handleLogin = () => {
  console.log("subltited");
};

function SignInContainer() {
  return (
    <div className="signIn">
      <Card className="main" body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default SignInContainer;
