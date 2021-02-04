import React, { Component } from "react";
import { Container, Title, LineBreak, Apps } from "./Home.styled";
import AppList from "../../components/AppList/AppList";

export default class Home extends Component {
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
