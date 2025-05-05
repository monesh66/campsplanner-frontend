import './navbar.css';
import Cookies from 'js-cookie';
import bitLogo from '../img/bitlogo.png';
import { CiLogin, CiViewList } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Navbar = ({ handlePageChange, page }) => {
    const navigate = useNavigate();

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <MdDashboard className="icons" />, path: "/dashboard" },
        { id: "view-plan", label: "View Plans", icon: <CiViewList className="icons" />, path: "/view-plan" },
        { id: "create-plan", label: "Create Plan", icon: <IoIosCreate className="icons" />, path: "/create-plan" },
        { id: "venue", label: "Venue", icon: <SiGoogleclassroom className="icons" />, path: "/venue" },
        { id: "users", label: "Users", icon: <FaUser className="icons" />, path: "/users" },
    ];

    return (
        <div className="navbar">
            <div className="topSection">
                <img src={bitLogo} alt="BIT LOGO" />
            </div>
            <div className="midSection">
                <ul>
                    {menuItems.map(({ id, label, icon, path }) => (
                        <li key={id}
                            className={`nav-item ${page === id ? 'dim' : ''}`}
                            onClick={() => { navigate(path); handlePageChange(id); }}>
                            <span>{icon}</span>
                            <span className="a">{label}</span>
                        </li>
                    ))}
                    <li className="red nav-item" onClick={() => { Cookies.remove('jwtToken'); navigate('/login'); }}>
                        <span><CiLogin className="icons" /></span>
                        <span className="a">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
