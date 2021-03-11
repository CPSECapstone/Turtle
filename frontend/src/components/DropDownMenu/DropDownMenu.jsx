import React, { Component, useState } from "react";
import {
    Container,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem
} from "./DropDownMenu.styled";

const options = ["Apps", "Account", "Questions"];

export default function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
      };
    
    return (
        <Container>
            <DropDownHeader onClick={toggling}>
                {selectedOption || "Welcome, Joe!"}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map(option => (
                            <ListItem onClick = {onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </Container>    
    ); 
}
