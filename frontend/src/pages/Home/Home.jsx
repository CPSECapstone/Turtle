import React, { Component } from "react";
import { Background, Title, SubText, ButtonRow, Button } from "./Home.styled";

export default class Home extends Component {
    render() {
        return (
            <Background>
                <Title>Welcome Home</Title>
                <SubText>It's CLOUDHAVEN BIIIATCH!</SubText>
                <ButtonRow>
                    <Button filled={false} to="/info">
                        How it Works
                    </Button>
                    <Button filled to="/app-page">
                        Get Started
                    </Button>
                </ButtonRow>
            </Background>
        );
    }
}
