import React, { Component } from "react";
import {
    Container,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem
} from "./DropDownMenu.styled";

export default class DropDownMenu extends Component {
    render() {
        return (
            <Container>
                <DropDownHeader>Joe Johnson</DropDownHeader>
                <DropDownListContainer>
                    <DropDownList>
                        <ListItem>Apps</ListItem>
                        <ListItem>Account</ListItem>
                        <ListItem>Questions</ListItem>
                    </DropDownList>
                </DropDownListContainer>
            </Container>
            
        );
    }
}
