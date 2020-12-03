import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Button, Input , LoginContainer, Wrapper, Label} from './Register.styled'
import Login from "../Login/Login";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <LoginContainer>

            
                <div>
                    <Wrapper>
                        <Label>Register</Label>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div>
                                <Input placeholder="Full Name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                />
                                
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div>
                                <Input placeholder="Email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div>
                                <Input placeholder="Password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div>
                                <Input placeholder="Confirm Password"
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                                <span className="red-text">{errors.password2}</span>
                            </div>
                            <div>
                                <Button type="submit">Sign up</Button>
                            </div>
                        </form>
                    </Wrapper>
                </div>
            </LoginContainer>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
