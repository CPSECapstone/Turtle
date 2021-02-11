import React, { Component } from "react";
import {
    BubbleContainer,
    ProfileImg,
    TextColumn,
    Bubble,
    Date,
} from "./ChatBubble.styled";

export default class ChatBubble extends Component {
    render() {
        const isUser = this.props.isUser;

        return (
            <BubbleContainer isUser={isUser}>
                <ProfileImg isUser={isUser} />
                <TextColumn isUser={isUser}>
                    <Bubble isUser={isUser}>
                        Dis is sum very long text talking about things and stuff
                    </Bubble>
                    <Date>Apr 16</Date>
                </TextColumn>
            </BubbleContainer>
        );
    }
}
