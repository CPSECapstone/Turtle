import React, { Component } from "react";
import {
    Form,
    FormGroup,
    Row,
    Col,
    FormControl,
    Button,
} from "react-bootstrap";

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        // Current login state
        this.state = {
            email: "",
            password: "",
        };

        // bind 'this' to the correct context
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    // Call redux actionCreator signin via props.
    signIn(event) {
        this.props.signIn(this.state, () => this.props.history.push("/home"));
        event.preventDefault();
    }

    handleChange(event) {
        let newState = {};
        newState[event.target.type] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <section className="container">
                <Col sm={{ offset: 2 }}>
                    <h1>Sign in</h1>
                </Col>
                <Form>
                    <FormGroup as={Row} controlId="formHorizontalEmail">
                        <Col as={Form.Label} sm={2}>
                            Email
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="email"
                                name="Email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="formHorizontalPassword">
                        <Col as={Form.Label} sm={2}>
                            Password
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col>
                            <Button type="submit" onClick={this.signIn}>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </section>
        );
    }
}
