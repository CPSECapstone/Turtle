import React, { Component } from "react";
import ChatBox from "react-chat-plugin";
import { Container } from "./ChatWindow.styled";

export default class ChatWindow extends Component {
    state = {
        messages: [
            {
                author: {
                    username: "user1",
                    id: 1,
                    avatarUrl:
                        "https://image.flaticon.com/icons/svg/2446/2446032.svg",
                },
                text: "Hi",
                type: "text",
                timestamp: 1578366393250,
            },
            {
                author: { username: "user2", id: 2, avatarUrl: null },
                text: "Show a button",
                type: "text",
                timestamp: 1578366425250,
            },
            {
                author: {
                    username: "user1",
                    id: 1,
                    avatarUrl:
                        "https://image.flaticon.com/icons/svg/2446/2446032.svg",
                },
                text: "What's up?",
                type: "text",
                timestamp: 1578366425250,
            },
        ],
    };

    handleOnSendMessage = (message) => {
        this.setState({
            messages: this.state.messages.concat({
                author: {
                    username: "user1",
                    id: 1,
                    avatarUrl:
                        "https://image.flaticon.com/icons/svg/2446/2446032.svg",
                },
                text: message,
                timestamp: +new Date(),
                type: "text",
            }),
        });
    };

    render() {
        return (
            <Container>
                <ChatBox
                    messages={this.state.messages}
                    userId={1}
                    onSendMessage={this.handleOnSendMessage}
                />
            </Container>
        );
    }
}
