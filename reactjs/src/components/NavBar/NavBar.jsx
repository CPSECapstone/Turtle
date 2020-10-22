import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    signedIn() {
        return Object.keys(this.props.Prss).length !== 0; // Nonempty Prss obj
    }

    render() {
        return (
            <>
                <Link to="/signin">
                    Sign In
                </Link>
                <Link to="/register">
                    Register
                </Link>
                {this.signedIn() ? (
                    <Link onClick={() => this.props.signOut()}>
                        Sign out
                    </Link>
                ) : (
                    ""
                )}
                {this.signedIn() ? (
                    <p key={3}>
                        {`Logged in as: ${this.props.Prss.firstName}
                           ${this.props.Prss.lastName}`}
                    </p>
                ) : (
                    ""
                )}
            </>
        );
    }
}
