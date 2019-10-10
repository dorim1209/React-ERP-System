import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


class Login extends Component {
  state = {
    isResult: false,
  }
  LoginResult = () => {
    this.setState({ isResult: true });
  };
  render() {
    const { isResult } = this.state;
    return (

      // {isResult ? <User /> : isAgency  <Agency /> : <Government />}?
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Login"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "사원번호"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "비밀번호"
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit" onclick = {this.state}>
                      Login
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
