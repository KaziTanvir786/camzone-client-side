import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const data = {
        displayName: `${registerData.name}`,
        email: `${registerData.email}`,
        role: "general-user"
    }

    const addToDatabase = data => {
        axios.post('https://lit-beach-01803.herokuapp.com/users', data)
            .then(res => {
            })
    };

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Password did not match! Try again.')
        }
        else {
            registerUser(registerData.email, registerData.password, registerData.name, history);

            if (!authError) {
                addToDatabase(data);
            }
            e.preventDefault();
        }
        e.preventDefault();
    }
    return (
        <div>
            {
                user?.email &&
                <Alert variant={'success'}>
                    Account has been created successfully.
                </Alert>
            }
            {
                authError &&
                <Alert variant={'danger'}>
                    {authError}
                </Alert>
            }
            {
                !isLoading &&
                <form onSubmit={handleRegisterSubmit} className="register-form p-4">
                    <h1 className="section-title w-50 mx-auto py-3 mb-4">Register</h1>
                    <div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input
                                    name="name"
                                    onBlur={handleOnBlur}
                                    type="text"
                                    placeholder="Full Name"
                                    className="form-control"
                                    id="inputName"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input
                                    name="email"
                                    onBlur={handleOnBlur}
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    id="inputEmail"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input
                                    name="password"
                                    onBlur={handleOnBlur}
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    id="inputPassword"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    id="inputPassword2"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <div className="form-check">
                                    <div className="m-3">
                                        <Link to="/login">
                                            Already a user?
                                        </Link>
                                    </div>
                                    <div>
                                        {
                                            <h4 className="text-danger">{authError.message}</h4>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="login-button">Register</button> <br />
                        <button className="google-button"><span className="me-2"><i className="fab fa-google"></i></span>Google Sign In</button>
                    </div>
                </form>
            }
            {
                isLoading &&
                <div>
                    <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
                </div>
            }
        </div>
    );
};

export default Register;