import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Content, TextInput, Button} from 'carbon-components-react';

import SideBar from './sidebar'

function Login(props) {
    const [orgName, setOrgName] = useState("");

    const onChangeHandler = (event) => {
        setOrgName(event.target.value);
    }

    return (
        <div className="parent-div">
            <SideBar />
            <Content className="main-container">
                <div className="login-form">
                    <h3 className="header">strobes</h3>
                    <h2 className="form-header">Login</h2>
                    <p className="form-header-subtext">
                        Don't have an account? 
                        <span className="highlighted-text" onClick={() => props.history.push('/registration')}> Register now</span>
                    </p>
                    <div className="login-input-box">
                        <TextInput
                            className="form-inputs"
                            id="orgName"
                            name="orgName"
                            value={orgName}
                            onChange={onChangeHandler}
                            labelText="Organisation Name"
                            placeholder="Organisation name"
                            type="text"
                        />
                        <Button className="login-button">
                            Continue 
                        </Button>
                        <p className="login-forgot">Forgot organisation?</p>
                    </div>
                </div>
                <p className="copyright">&copy; Copyright Strobes 2020. All Rights Reserved.</p>
            </Content>
        </div>
    )
}

export default withRouter(Login)