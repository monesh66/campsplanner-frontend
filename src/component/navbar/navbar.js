import './navbar.css';
import Cookies from 'js-cookie';
import bitLogo from '../img/bitlogo.png';
import { CiLogin } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';





const Navbar = ({ url, handlePageChange, page }) => {
    const navigate = useNavigate();

    // useEffect(()=>{
    //     if
    // },[page])


    return (
        <div className="navbar">
            <div className="topSection">
                <img src={bitLogo} alt="BIT LOGO" />
            </div>
            <div className="midSection">
                <ul>
                    {(() => {
                        //dashboard
                        if (page == "dashboard") {
                            return (
                                <div>
                                    <li className='dim' onClick={() => { navigate('/dashboard'); handlePageChange("dashboard") }}><span><MdDashboard className='icons' /></span><a>Dashboard</a></li>
                                    <li id='vie' onClick={() => { navigate('/view-plan'); handlePageChange("view-plan") }}><span><CiViewList className='icons' /></span><a>View Plans</a></li>
                                    <li id='cre' onClick={() => { navigate('/create-plan'); handlePageChange("create-plan") }}><span><IoIosCreate className='icons' /></span><a>Create Plan</a></li>
                                </div>
                            )
                        }
                        else if (page == "view-plan") {
                            return (
                                <div>
                                    <li onClick={() => { navigate('/dashboard'); handlePageChange("dashboard") }}><span><MdDashboard className='icons' /></span><a>Dashboard</a></li>
                                    <li className='dim' onClick={() => { navigate('/view-plan'); handlePageChange("view-plan") }}><span><CiViewList className='icons' /></span><a>View Plans</a></li>
                                    <li id='cre' onClick={() => { navigate('/create-plan'); handlePageChange("create-plan") }}><span><IoIosCreate className='icons' /></span><a>Create Plan</a></li>
                                </div>
                            )
                        }
                        else if (page == "create-plan") {
                            return (
                                <div>
                                    <li onClick={() => { navigate('/dashboard'); handlePageChange("dashboard") }}><span><MdDashboard className='icons' /></span><a>Dashboard</a></li>
                                    <li onClick={() => { navigate('/view-plan'); handlePageChange("view-plan") }}><span><CiViewList className='icons' /></span><a>View Plans</a></li>
                                    <li className='dim' onClick={() => { navigate('/create-plan'); handlePageChange("create-plan") }}><span><IoIosCreate className='icons' /></span><a>Create Plan</a></li>
                                </div>
                            )
                        }
                        else{
                            return (
                                <div>
                                    <li onClick={() => { navigate('/dashboard'); handlePageChange("dashboard") }}><span><MdDashboard className='icons' /></span><a>Dashboard</a></li>
                                    <li onClick={() => { navigate('/view-plan'); handlePageChange("view-plan") }}><span><CiViewList className='icons' /></span><a>View Plans</a></li>
                                    <li onClick={() => { navigate('/create-plan'); handlePageChange("create-plan") }}><span><IoIosCreate className='icons' /></span><a>Create Plan</a></li>
                                </div>
                            )
                        }

                    })()}

                    <li className='red' onClick={() => { Cookies.remove('jwtToken'); navigate('/login') }}><span><CiLogin className='icons' /></span><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;