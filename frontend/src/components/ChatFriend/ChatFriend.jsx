import React, { Component } from "react";
import {
    FriendContainer,
    FriendRow,
    ProfileImage,
    TextColumn,
    Name,
    LastMessage,
    LastMessageDate,
} from "./ChatFriend.styled";

export default class ChatFriend extends Component {
    render() {
        return (
            <FriendContainer>
                <FriendRow>
                    <ProfileImage />
                    <TextColumn>
                        <Name>Darryl Fields</Name>
                        <LastMessage>I hate bananas</LastMessage>
                    </TextColumn>
                </FriendRow>
                <LastMessageDate>Apr 16</LastMessageDate>
            </FriendContainer>
        );
    }
}
