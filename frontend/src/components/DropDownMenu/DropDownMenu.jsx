import React, { Component, useState } from "react";
import {
    Container,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem
} from "./DropDownMenu.styled";

const options = ["Joe Johnson", "Account", "Questions"];

export default function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
      };
    
    
    return (
        <Container>
            <DropDownHeader onClick={toggling}>
                {selectedOption || "Joe Johnson"}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </Container>    
    ); 
}
