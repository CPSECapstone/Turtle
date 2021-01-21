import React, { Component } from "react";
import { Container, Title, LineBreak, Apps } from "./AppPage.styled";
import AppList from "../../components/AppList/AppList";

export default class AppPage extends Component {
    render() {
        return (
            <Container>
                <Title>Apps</Title>
                <LineBreak />
                <Apps children={<AppList />} />
            </Container>
        );
    }
}
