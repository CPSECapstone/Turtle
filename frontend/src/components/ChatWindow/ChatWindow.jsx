import React, { Component } from "react";
import {
    Container,
    Background,
    SideBar,
    SearchRow,
    SearchForm,
    FriendList,
    ScrollList,
    ButtonContainer,
    AddButton,
    Main,
    TopRow,
    Title,
    CloseIcon,
    Body,
    Text,
    ChatRow,
    AttachmentIcon,
    ChatInput,
} from "./ChatWindow.styled";

export default class ChatWindow extends Component {
    render() {
        return (
            <Container>
                <Background>
                    <SideBar>
                        <SearchRow>
                            <SearchForm type="text" placeholder="Search..." />
                        </SearchRow>
                        <FriendList>
                            <ScrollList>
                                <div>Example</div>
                                <div>
                                    This is where the user friends will go
                                </div>
                            </ScrollList>
                        </FriendList>
                        <ButtonContainer>
                            {/* TODO: Add ability to add new friends to list from database */}
                            <AddButton>
                                <p>+</p>
                            </AddButton>
                        </ButtonContainer>
                    </SideBar>
                    <Main>
                        <TopRow>
                            <Title>Some Name</Title>
                            <CloseIcon></CloseIcon>
                        </TopRow>
                        <Body>
                            <Text>{/* {List of text messages} */}</Text>
                        </Body>
                        <ChatRow>
                            <AttachmentIcon />
                            <ChatInput
                                type="text"
                                placeholder="Type something"
                            />
                        </ChatRow>
                    </Main>
                </Background>
            </Container>
        );
    }
}
