import React from 'react';
import WrappedRegForm from '../components/RegistrationForm';
import {withRouter} from "react-router-dom";


class RegistrationView extends React.Component{


    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">Registration</h1>
                        <div className="login-content">
                            <WrappedRegForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(RegistrationView);