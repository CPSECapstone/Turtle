import React, { Component } from "react";
import { Container, Title, LineBreak } from "./AppPage.styled";
import AppStore from "../../components/AppStore/AppStore";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AppPage extends Component {
    render() {
        return (
            <Container>
                <Title>App Store</Title>
                <LineBreak />
                <AppStore />
            </Container>
        );
    }
}

AppPage.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(AppPage));
