import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            {
                user?.email &&
                <Alert variant={'success'}>
                    Logged in successfully.
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
                <form onSubmit={handleLoginSubmit} className="login-form p-4 mb-5">
                    <h1 className="section-title w-50 mx-auto py-3 mb-4">Please Login</h1>
                    <div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input
                                    name="email"
                                    onChange={handleOnChange}
                                    type="email"
                                    placeholder="Your Email"
                                    className="form-control"
                                    id="inputEmail"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input
                                    name="password"
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="Your Password"
                                    className="form-control"
                                    id="inputPassword"
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <div className="form-check">
                                    <div className="m-3">
                                        <Link to="/register">
                                            Not Registered yet? Create an account.
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
                        <button type="submit" className="login-button">Sign in</button> <br />
                        <button onClick={handleGoogleSignIn} className="google-button"> <span className="me-2"><i className="fab fa-google"></i></span> Google Sign In</button>
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

export default Login;