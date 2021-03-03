import React, { Component } from "react";
import { Container, IconRow, TabColumn, AddTab } from "./SideBar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPlus } from "react-icons/go";

export default class SideBar extends Component {
    render() {
        const { children } = this.props;

        return (
            <Container>
                <IconRow>
                    <GiHamburgerMenu />
                </IconRow>
                <TabColumn>
                    {children}
                    <AddTab>
                        <GoPlus />
                    </AddTab>
                </TabColumn>
            </Container>
        );
    }
}
