import React, { Component } from "react";

export default class EmptyPage extends Component {
    constructor(props) {
        super(props);
    }

    parser(input) {
        return <div></div>;
    }

    render() {
        const { children } = parser(this.props);

        return (
            <div>
                { children }
            </div>
        )
    }
}


