import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        // bind 'this' to the correct context
        this.test = this.test.bind(this);
    }

    test(event) {
        this.props.history.push("/test");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button type="submit" onClick={this.test}>
                    Test Example
                </button>
            </div>
        );
    }
}
