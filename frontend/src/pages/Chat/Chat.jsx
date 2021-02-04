import React, { Component } from "react";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import { Container } from "./Chat.styled";

export default class Chat extends Component {
    render() {
        return (
            <Container>
                <ChatWindow />
            </Container>
        );
    }
}
