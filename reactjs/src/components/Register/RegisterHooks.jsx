import React, { useState } from "react";
import { ConfDialog } from "../components";
import { Form, FormGroup, Button, Alert } from "react-bootstrap";

// Functional component label plus control w/optional help message
function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...props} />
            {help && <Form.Text className="text-muted">{help}</Form.Text>}
        </FormGroup>
    );
}

export default (props) => {
    console.log("Rendering Registration");

    const [curUser, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordTwo: "",
        termsAccepted: false,
        role: 0,
    });

    const [signedIn, setSignedIn] = useState({
        offerSignIn: false,
    });

    let submit = (event) => {
        let {
            firstName,
            lastName,
            email,
            password,
            termsAccepted,
            role,
        } = curUser;

        const user = {
            firstName,
            lastName,
            email,
            password,
            termsAccepted,
            role,
        };

        props.register(user, () => {
            setSignedIn({ offerSignIn: true });
        });
    };

    let handleChange = (event) => {
        let newState = [];

        switch (event.target.type) {
            case "checkbox":
                newState[event.target.id] = event.target.checked;
                break;
            default:
                newState[event.target.id] = event.target.value;
        }

        setUser(Object.assign({}, curUser, newState));
    };

    let formValid = () => {
        let s = curUser;

        return (
            s.email &&
            s.lastName &&
            s.password &&
            s.password === s.passwordTwo &&
            s.termsAccepted
        );
    };

    return (
        <div className="container">
            <form>
                <FieldGroup
                    id="email"
                    type="email"
                    label="Email Address"
                    placeholder="Enter email"
                    value={curUser.email}
                    onChange={handleChange}
                    required={true}
                />

                <FieldGroup
                    id="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Enter first name"
                    value={curUser.firstName}
                    onChange={handleChange}
                />

                <FieldGroup
                    id="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Enter last name"
                    value={curUser.lastName}
                    onChange={handleChange}
                    required={true}
                />

                <FieldGroup
                    id="password"
                    type="password"
                    label="Password"
                    value={curUser.password}
                    onChange={handleChange}
                    required={true}
                />

                <FieldGroup
                    id="passwordTwo"
                    type="password"
                    label="Repeat Password"
                    value={curUser.passwordTwo}
                    onChange={handleChange}
                    required={true}
                    help="Repeat your password"
                />

                <Form.Check
                    id="termsAccepted"
                    value={curUser.termsAccepted}
                    onChange={handleChange}
                    label="Do you accept the terms and conditions?"
                />
            </form>

            {curUser.password !== curUser.passwordTwo ? (
                <Alert variant="warning">Passwords don't match</Alert>
            ) : (
                ""
            )}

            <Button variant="primary" onClick={submit} disabled={!formValid()}>
                Submit
            </Button>

            <ConfDialog
                show={signedIn.offerSignIn}
                title="Registration Success"
                body={`Would you like to log in as ${curUser.email}?`}
                buttons={["YES", "NO"]}
                onClose={(answer) => {
                    setSignedIn({ offerSignIn: false });
                    if (answer === "YES") {
                        var temp = {};
                        temp.email = curUser.email;
                        temp.password = curUser.password;
                        props.signIn(temp, () => props.history.push("/home"));
                    }
                }}
            />
        </div>
    );
};
