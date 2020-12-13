import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Content, TextInput, Button} from 'carbon-components-react';

import SideBar from './sidebar'

function ForgotPassword(props) {
    const [email, setEmail] = useState("");

    const onChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const handleForgotPassword = () => {
        console.log("Forgot password ", email)
    }

    return (
        <div className="parent-div">
            <SideBar />
            <Content className="main-container">
                <div className="login-form">
                    <h3 className="header">strobes</h3>
                    <h2 className="form-header">Trouble logging in?</h2>
                    <p className="form-header-subtext">Reset your account password. </p>
                    <div className="login-input-box">
                        <TextInput
                            className="form-inputs"
                            id="orgName"
                            name="orgName"
                            value={email}
                            onChange={onChangeHandler}
                            labelText="Enter your Strobes ID"
                            placeholder="Email"
                            type="text"
                        />
                        <Button 
                            className="login-button"
                            onClick={handleForgotPassword}
                        >
                            Continue 
                        </Button>
                        <p className="go-to-login" onClick={() => props.history.push('/login')}>Go back to Log in</p>
                    </div>
                </div>
                <p className="copyright">&copy; Copyright Strobes 2020. All Rights Reserved.</p>
            </Content>
        </div>
    )
}

export default withRouter(ForgotPassword)