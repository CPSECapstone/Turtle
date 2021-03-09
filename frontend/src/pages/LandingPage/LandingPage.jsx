import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Background, Title, SubText, ButtonRow, Button } from "./LandingPage.styled";

class LandingPage extends Component {
    render() {
        const { auth } = this.props;

        return (
            <Background>
                <Title>Welcome Home</Title>
                <SubText>It's CLOUDHAVEN!</SubText>
                <ButtonRow>
                    <Button filled={false} to="/info">
                        How it Works
                    </Button>
                    <Button filled to={auth.isAuthenticated ? "/home" : "/login"}>
                        Get Started
                    </Button>
                </ButtonRow>
            </Background>
        );
    }
}

LandingPage.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(LandingPage));