import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
<<<<<<< HEAD
import { MainNav, NavLogo, StyledLinked, Header, NavItemLocation} from "./NavBar.styled";
import logo from '../../images/real.png';
=======
import {
    Container,
    UserRow,
    Name,
    Button,
    LoginContainer,
} from "./NavBar.styled";
>>>>>>> 9162e8f8ea7cbef3c9621c571831e80b922f387c

class NavBar extends Component {
    render() {
        const { auth, logoutUser, location } = this.props;
        let userName;

        if (auth.isAuthenticated) {
            userName =
                auth.user.name[0].toUpperCase() + auth.user.name.slice(1);
        }

        return (
<<<<<<< HEAD
            <MainNav>
            <NavLogo>
                <img src={logo}/>
            </NavLogo>
            <Header>Cloud Haven</Header>
               <NavItemLocation>
                    <>
                        {auth.isAuthenticated ? (
                            <>
                                <StyledLinked onClick={logoutUser}>Sign out</StyledLinked>
                                <p key={3}>{`Logged in as: You`}</p>
                            </>
                        ) : (
                            <>
                                <StyledLinked to="login">Login</StyledLinked>
                                <StyledLinked to="register">Register </StyledLinked>
                            </>
                        )}
                    </>
                </NavItemLocation>
            </MainNav>
=======
            <Container singleItem={location.pathname == "/landing-page"}>
                {location.pathname !== "/landing-page" ? (
                    <Button filled to="/landing-page">
                        Back
                    </Button>
                ) : (
                    ""
                )}

                {auth.isAuthenticated ? (
                    <UserRow>
                        <Name key={3}>{`Logged in as: ${userName}`}</Name>
                        <Button onClick={logoutUser}>Sign out</Button>
                    </UserRow>
                ) : (
                    <LoginContainer>
                        {location.pathname !== "/login" ? (
                            <Button to="/login">Login</Button>
                        ) : (
                            ""
                        )}
                        {location.pathname !== "/register" ? (
                            <Button to="/register">Register</Button>
                        ) : (
                            ""
                        )}
                    </LoginContainer>
                )}
            </Container>
>>>>>>> 9162e8f8ea7cbef3c9621c571831e80b922f387c
        );
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));
