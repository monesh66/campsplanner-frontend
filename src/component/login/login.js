import './login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import login from '../img/login.png';
import { useEffect, useState } from 'react';
import { PiSpinnerBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
import { FaXmark } from "react-icons/fa6";

const Login = ({ url }) => {
    const [isLoading, setIsLoading] = useState(1);
    const [isAuth, setIsAuth] = useState(0);
    const [showMSG, setShowMSG] = useState(0);
    const [msg, setmsg] = useState("");


    const navigate = useNavigate();

    const handleSuccess = async (response) => {
        const token = response.credential;
        const user = jwtDecode(token);
        console.log('User Info:', user);
        
        try {
            const response = await axios.post(url + '/api/v1/auth/login', {
                email: user.email,
                loginType: "oAuth"
            });
            console.log(response)
            if (response.data.code === 1) {
                console.log("oAuth Login successful!");
                Cookies.set('jwtToken', response.data.jwt);
                navigate("/dashboard");
            } else {
                console.log(`${user.email} not regestered!`);
                setmsg(`${user.email} not regestered!`)
                setShowMSG(1);
            }
        } catch (error) {
        
        }
    };

    const handleError = () => {
        console.log('Login Failed');
    };

    //page loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(0)
        }, 1800)
    }, [])

    //check auth
    useEffect(() => {
        const checkAuth = async () => {
            const cookie = Cookies.get('jwtToken');
            if (cookie) {
                try {
                    const response = await axios.post(url + '/api/v1/auth/verify', {
                        JWT: cookie,
                        loginType: "username"
                    });
                    if (response.data.auth === true) {
                        console.log(response.data)
                        navigate("/dashboard");
                    }
                    else{
                        setmsg(response.data.msg);
                        setShowMSG(1);
                        setIsAuth(-1);
                    }
                } catch (error) {
                    console.error('Error posting data:', error);
                    setIsAuth(-1);
                }
            }
            else {
                console.log("JWT Token Not Found")
                setIsAuth(-1);
            }
        }
        setTimeout(() => {
            checkAuth();
        }, 1000);
    }, )

    //handle submit
    const handleSubmit = async (username, password) => {
        if (!username || !password) {
            console.log("Username and password are required!");
            setmsg("Username and password are required!")
            setShowMSG(1);
            return;
        }

        try {
            const response = await axios.post(url + '/api/v1/auth/login', {
                username: username,
                password: password,
                loginType: "username"
            });

            if (response.data.code === 1) {
                console.log("Login successful!");
                Cookies.set('jwtToken', response.data.jwt);
                navigate("/dashboard");
            } else {
                console.log("Invalid username or password!");
                setmsg("Invalid username or password!")
                setShowMSG(1);
            }
        } catch (error) {
            console.error("Error during login:", error.response ? error.response.data : error.message);
            setmsg("Error during login")
            setShowMSG(1);
        }
    };


    return (
        <div>
            {(() => {
                if (isAuth === 0) {
                    return (
                        <div className="loading">
                            <PiSpinnerBold className='pi' />
                            <p>Authenticating...</p>
                        </div>)
                }
                else if (isLoading === 1 & isAuth !== 0) {
                    return (
                        <div className="loading">
                            <PiSpinnerBold className='pi' />
                            <p>Loading...</p>
                        </div>)
                }
                else {
                    return (
                        <div>
                            {showMSG ? (
                                <div className="notification">
                                    <p className="msg">{msg}</p>
                                    <FaXmark className='close' onClick={()=>{setShowMSG(0);}}/>
                                </div>
                            ) : (
                                <div></div>
                            )}

                            <div className="login">
                                <div className="left">
                                    <img className='loginimg' src={login} alt="Login img" />
                                </div>
                                <div className="right">
                                    <div className="box">
                                        <h1>Campus Schedule Planner</h1>
                                        <p>Login To Access</p>
                                        <div className="inputBox">
                                            <input type="text" name='username' id='username' placeholder='Username' />
                                            <input type="text" name='password' id='password' placeholder='Password' />
                                            <button onClick={() => {
                                                const username = document.getElementById('username').value;
                                                const password = document.getElementById('password').value;
                                                handleSubmit(username, password);
                                            }}>Login</button>
                                        </div>
                                        <div className="Gauth">
                                            <GoogleOAuthProvider clientId="885814271546-1bd3vgp6bjfcfn61rao4v2pqfju8is10.apps.googleusercontent.com">
                                                <p className='googletext'>Student?. Use google account to login</p>
                                                <div className="google">
                                                    <GoogleLogin
                                                        onSuccess={handleSuccess}
                                                        onError={handleError}
                                                    />
                                                </div>
                                            </GoogleOAuthProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })()}
        </div>
    )



}

export default Login;