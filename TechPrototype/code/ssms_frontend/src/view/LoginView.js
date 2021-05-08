import React from 'react';
import WrappedLoginForm from '../components/LoginForm';
import {withRouter} from "react-router-dom";


class LoginView extends React.Component{


    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">Login</h1>
                        <div className="login-content">
                            <WrappedLoginForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(LoginView);