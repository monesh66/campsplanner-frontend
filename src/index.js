import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { MdOutlineErrorOutline } from "react-icons/md";
import Login from './component/login/login';
import Main from './component/main/main';


// const url = "http://localhost:8090";
const url = process.env.REACT_APP_BACKEND_API;

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize(); // Check on mount
        window.addEventListener("resize", checkScreenSize); // Listen for window resize

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (isMobile) {
        return (
            <div className="phone">
                <div className="bc1"></div>
                <div className="bc2"></div> 

                <div className="displayMsg">
                    <div className="icon">
                        <MdOutlineErrorOutline />
                    </div>
                    <div className="para">
                        <p className='p1'>This website isn't intended for mobile.</p>
                        <p className='p2'>Please use a desktop to access this website.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="desktop-content">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login url={url} />} />
                    <Route path="*" element={<Main url={url} />} />
                </Routes>
            </Router>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
