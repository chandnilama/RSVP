import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Routes } from 'react-router-dom'; //v6
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from "./home/home_container";
// import NavBarContainer from './navbar/navbar_container'
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import SignIn from './session/signin_mui';
import SignUp from "./session/signup_mui"
import ModalMain from "./modal/modal_main_container"

const App = () => (
    <div>

        {/* <Route to="/" component={NavBarContainer} /> */}
        <Route to="/" component={ModalMain} />
        
        <Switch> 
            <Route exact path="/" component={HomePage} />
            <AuthRoute path="/signin" component={SignIn} />
            <AuthRoute path="/signup2" component={SignUp} />

            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            
        </Switch>
    </div>
)



export default App;