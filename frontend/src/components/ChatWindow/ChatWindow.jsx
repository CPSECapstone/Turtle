import React, { Component } from "react";
import ChatFriend from "../ChatFriend/ChatFriend";
import ChatBubble from "../ChatBubble/ChatBubble";
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
                                {/* TODO: Cleanup */}
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
                                <ChatFriend />
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
                            <Text>
                                {/* TODO: Cleanup */}
                                <ChatBubble isUser/>
                                <ChatBubble/>
                                <ChatBubble/>
                                <ChatBubble/>
                                <ChatBubble/>
                                <ChatBubble isUser/>
                                <ChatBubble isUser/>
                                <ChatBubble/>
                                <ChatBubble isUser/>
                                <ChatBubble/>
                                <ChatBubble/>  
                                <ChatBubble isUser/>  
                                <ChatBubble isUser/>
                                <ChatBubble isUser/>
                                <ChatBubble isUser/>
                                <ChatBubble isUser/>
                                <ChatBubble isUser/>
                            </Text>
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
