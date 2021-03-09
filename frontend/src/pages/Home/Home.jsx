import React, { Component } from "react";
import { Container } from "./Home.styled";
import SideBar from "../../components/SideBar/SideBar";
import MainContent from "../../components/MainContent/MainContent";
import SideTab from "../../components/SideTab/SideTab";
import { FaHome, FaPiggyBank, FaHospital } from "react-icons/fa";

export default class Home extends Component {
    state = {
        activeTab: "Home",
    };

    render() {
        const { activeTab } = this.state;

        return (
            <Container>
                <SideBar>
                    <SideTab
                        active={activeTab == "Home" ? true : false}
                        title="Home"
                        onclick={() => this.setState({ activeTab: "Home" })}
                    >
                        <FaHome />
                    </SideTab>
                    <SideTab
                        active={activeTab == "Bank" ? true : false}
                        title="Example Bank"
                        onclick={() => this.setState({ activeTab: "Bank" })}
                    >
                        <FaPiggyBank />
                    </SideTab>
                    <SideTab
                        active={activeTab == "Hospital" ? true : false}
                        title="Example Hospital"
                        onclick={() => this.setState({ activeTab: "Hospital" })}
                    >
                        <FaHospital />
                    </SideTab>
                </SideBar>
                <MainContent><div>hi</div></MainContent>
            </Container>
        );
    }
}
