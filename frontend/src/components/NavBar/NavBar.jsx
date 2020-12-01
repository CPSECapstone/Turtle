import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { MainNav, NavLogo, NavLink, StyledLinked} from "./NavBar.styled";
import logo from '../../images/real.png';
class NavBar extends Component {
    render() {
        const { auth, logoutUser } = this.props;

        return (
            <MainNav>
            <NavLogo>
                <img src={logo}/>
            </NavLogo>
                <>
                    {auth.isAuthenticated ? (
                        <>
                            <button onClick={logoutUser}>Sign out</button>
                            <p key={3}>{`Logged in as: You`}</p>
                        </>
                    ) : (
                        <>
                            <StyledLinked to="login">
                                Login
                            </StyledLinked>
                            <StyledLinked to="register">
                                Register
                            </StyledLinked>
                            
                            
                        </>
                    )}
                </>
            </MainNav>
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
