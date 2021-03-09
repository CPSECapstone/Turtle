import React, { Component } from "react";
// import { Background } from "../MainContent/MainContent.styled";
import {
    Container,
    IconContainer,
    Icon,
    TitleContainer,
    Title,
    Corner,
    BottomRight,
    TopRight,
    Background,
} from "./SideTab.styled";

export default class SideTab extends Component {
    render() {
        const { title, active, children, onclick } = this.props;

        return (
            <>
                <Corner>
                    {active ? (
                        <Background>
                            <BottomRight />
                        </Background>
                    ) : (
                        ""
                    )}
                </Corner>
                <Container active={active} onClick={onclick}>
                    <IconContainer active={active}>
                        <Icon active={active}>{children}</Icon>
                    </IconContainer>
                    <TitleContainer active={active}>
                        <Title>{title}</Title>
                    </TitleContainer>
                </Container>
                <Corner>
                    {active ? (
                        <Background>
                            <TopRight />
                        </Background>
                    ) : (
                        ""
                    )}
                </Corner>
            </>
        );
    }
}
