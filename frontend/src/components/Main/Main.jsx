import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Example from "../Example/Example";
import { Route, Redirect, Switch } from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} {...this.props} />
                    <Route
                        path="/test"
                        component={Example}
                        {...this.props}
                        render={() => <Redirect to="/test" />}
                    />
                </Switch>
            </div>
        );
    }
}
