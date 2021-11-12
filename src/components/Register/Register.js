import React, { useState } from 'react';
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
        console.log(newRegisterData);
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Password did not match! Try again.')
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);
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
                    <h2 className="my-4 text-success">Create an account</h2>
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
                                    <div className="me-3">
                                        <Link to="/login">
                                            Already a user?
                                        </Link>
                                    </div>
                                    <div>
                                        {
                                            <h4 className="text-danger">"Error"</h4>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Register</button> <br /> or, <br />
                        <button className="btn btn-primary"><span className="me-2"><i className="fab fa-google"></i></span>Google Sign In</button>
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