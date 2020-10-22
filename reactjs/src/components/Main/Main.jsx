import React, { Component } from "react";
import { Register, SignIn, ErrDialog, Home } from "../components";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

var ProtectedRoute = ({ component: Cmp, path, ...rest }) => {
    return (
        <Route
            path={path}
            render={(props) => {
                return Object.keys(rest.Prss).length !== 0 ? (
                    <Cmp {...rest} />
                ) : (
                    <Redirect to="/signin" />
                );
            }}
        />
    );
};

export default class Main extends Component {
    signedIn() {
        return Object.keys(this.props.Prss).length !== 0; // Nonempty Prss obj
    }

    closeConfirmation = (res) => {
        this.props.clearErrs();
    };

    render() {
        return (
            <div>
                <NavBar {...this.props} />

                {/*Alternate pages beneath navbar, based on current route*/}
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Redirect to="/signin" />}
                    />
                    <Route
                        path="/signin"
                        render={() => <SignIn {...this.props} />}
                    />
                    <Route
                        path="/register"
                        render={() => <Register {...this.props} />}
                    />
                    <ProtectedRoute
                        path="/home"
                        component={Home}
                        {...this.props}
                    />
                </Switch>

                {/*Error popup dialog*/}
                <ErrDialog
                    show={this.props.Errs.length > 0}
                    title="Error Notice"
                    body={`${this.props.Errs}`}
                    buttons={["Ok"]}
                    onClose={this.closeConfirmation}
                />
            </div>
        );
    }
}
