import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';

import { Provider } from 'react-redux';
import store from '../store';

import NavBar from '../components/NavBar/NavBar';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Chat from '../pages/Chat/Chat';
import PrivateRoute from '../components/private-route/PrivateRoute';
import { Container } from './app.styled';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = './login';
    }
}

function App () {
    return (
        <Provider store={store}>
            <Router>
                <Container>
                    <NavBar />

                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={() => <Redirect to='/landing-page' />}
                        />
                        <Route
                            exact
                            path='/landing-page'
                            component={LandingPage}
                        />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <PrivateRoute exact path='/home' component={Home} />
                        <PrivateRoute exact path='/chat' component={Chat} />
                    </Switch>
                </Container>
            </Router>
        </Provider>
    );
}

export default App;
