import React, { Component } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { ImCalendar } from "react-icons/im";
import { Calendar } from '../Calendar/Calendar';
import ChatWindow from '../ChatWindow/ChatWindow';
import {
    Background,
    Container,
    Column,
    Row,
    CommunicationItem,
} from "./MainContent.styled";

export default class MainContent extends Component {
    state = {
        activeItem: "Application",
    };

    render() {
        const { children } = this.props;
        const { activeItem } = this.state;

        return (
            <Background>
                <Container>
                    <Column>
                        <Row>
                            <CommunicationItem
                                active={
                                    activeItem == "Application" ? true : false
                                }
                                onClick={() =>
                                    this.setState({ activeItem: "Application" })
                                }
                            >
                                Application
                            </CommunicationItem>
                            <CommunicationItem
                                active={activeItem == "Messages" ? true : false}
                                onClick={() =>
                                    this.setState({ activeItem: "Messages" })
                                }
                            >
                                <RiMessage2Line /> Messages
                            </CommunicationItem>
                            <CommunicationItem
                                active={activeItem == "Calendar" ? true : false}
                                onClick={() =>
                                    this.setState({ activeItem: "Calendar" })
                                }
                            >
                                <ImCalendar /> Calendar
                            </CommunicationItem>
                        </Row>
                        {activeItem == "Application" ? (
                            children
                        ) : activeItem == "Messages" ? (
                            <ChatWindow></ChatWindow>
                        ) : (
                            <Calendar></Calendar>
                        )}
                        {/* {children} */}
                    </Column>
                </Container>
            </Background>
        );
    }
}
