import React, { Component } from "react";
import { Container, Title, LineBreak, Apps } from "./AppPage.styled";
import AppStore from "./AppStore";

export default class AppPage extends Component {
    render() {
        return (
            <Container>
                <Title>Apps</Title>
                <LineBreak />
                <AppStore />
            </Container>
        );
    }
}
