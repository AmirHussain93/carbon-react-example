import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Grid, Row, Column, Dropdown, TextInput, Button} from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';

import SideBar from './sidebar'

const items = [
    {
      id: 'option-1',
      label: 'Software Engineer',
    },
    {
      id: 'option-2',
      label: 'Backend Developer',
    }]

function Registration(props) {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        designation: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    
    const handleRegistration = () => {
        console.log("registration ", user)
    }
    return (
        <div className="parent-div">
            <SideBar />
            <Content className="main-container">
                <h3 className="header">strobes</h3>

                <div className="form">
                    <h2 className="form-header">Register</h2>
                    <p className="form-header-subtext">
                        Already have an account? 
                        <span className="highlighted-text" onClick={() => props.history.push('/login')}> Log in</span>
                    </p>
                    <Grid className="grid-box mg-top">
                        <Row>
                            <Column sm={2} md={4} lg={6}>
                                <TextInput
                                    className="form-inputs"
                                    id="firstname"
                                    name="firstname"
                                    value={user.firstname}
                                    onChange={onChangeHandler}
                                    labelText="First Name"
                                    placeholder="Enter Name"
                                    type="text"
                                />
                            </Column>
                            <Column sm={2} md={4} lg={6}>
                                <TextInput
                                    className="form-inputs"
                                    id="lastname"
                                    name="lastname"
                                    value={user.lastname}
                                    onChange={onChangeHandler}
                                    labelText="Last Name"
                                    placeholder="Last Name"
                                    type="text"
                                />
                            </Column>
                        </Row>
                        <Row className="mg-top">
                            <Column sm={2} md={4} lg={6}>
                                <TextInput
                                    className="form-inputs"
                                    id="company"
                                    name="company"
                                    value={user.company}
                                    onChange={onChangeHandler}
                                    labelText="Company"
                                    placeholder="Company"
                                    type="text"
                                />
                            </Column>
                            <Column sm={2} md={4} lg={6}>
                                <Dropdown
                                    ariaLabel="Dropdown"
                                    id="carbon-dropdown-example"
                                    items={items}
                                    label="Select"
                                    titleText="I am a"
                                />
                            </Column>
                        </Row>
                        <Row className="mg-top">
                            <Column sm={2} md={4} lg={6}>
                                <TextInput
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={onChangeHandler}
                                    labelText="Email"
                                    placeholder="Email"
                                    type="text"
                                />
                            </Column>
                            <Column sm={2} md={4} lg={6}>
                                <TextInput.PasswordInput
                                    id="password"
                                    name="password"
                                    value={user.password}
                                    onChange={onChangeHandler}
                                    labelText="Password"
                                    placeholder="password"
                                    type="password"
                                />
                            </Column>
                        </Row>
                        <Row className="mg-top">
                            <Column sm={4} md={8} lg={12}>
                                <Button 
                                    className="registration-button"
                                    onClick={handleRegistration}
                                >
                                    Continue with your free account
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </div>
                <p className="copyright">&copy; Copyright Strobes 2020. All Rights Reserved.</p>
            </Content>
        </div>
    )
}

export default withRouter(Registration)

