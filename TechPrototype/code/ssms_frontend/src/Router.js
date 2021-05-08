import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
import HomeView from "./view/HomeView";
import LoginView from './view/LoginView'
import {history} from "./utils/history";
import NewsView from "./view/NewsView";
import RegistrationView from './view/RegistrationView';
import EnrollView from './view/EnrollView';
import ProfileView from './view/ProfileView';


class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeView} />
                    <LoginRoute exact path="/login" component={LoginView} />
                    <LoginRoute exact path="/registration" component={RegistrationView} />
                    <PrivateRoute exact path="/newsDetails" component={NewsView} />
                    <PrivateRoute exact path="/enrollment" component={EnrollView} />
                    <PrivateRoute exact path="/profile" component={ProfileView} />
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;