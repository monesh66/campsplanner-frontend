import './main.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import NavBar from '../navbar/navbar';
import AddVenue from '../addVenue/addVenue'
import Dashboard from '../dashboard/dashboard';
import ViewPlanMain from '../viewPlan/viewPlanMain'
import User from '../user/user'
import RollDice from '../dice/rollDice'  //wddewfefewfkendvkirdn v
import CreatePlan from '../createPlan/createPlan'
// import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { PiSpinnerBold} from "react-icons/pi";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
 
const Main = ({ url }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuth, setIsAuth] = useState(0);
    const [userType, setUserType] = useState(0);
    const [isLoading, setIsLoading] = useState(1);
    const [page, setPage] = useState(0);

    function handlePageChange(page) {
        setPage(page);
    }

    //check for auth
    useEffect(() => {
        const checkAuth = async () => {
            // setIsAuth(1)
            // setUserType("staff")
            try {
                const jwtToken = Cookies.get("jwtToken");
                console.log(`jwtToken: ${jwtToken}`);
                if (jwtToken) {
                    const response = await axios.post(
                        url + "/api/v1/verify",
                        {
                            jwt: jwtToken
                        }
                    )
                    if (response.data.auth === true) {
                        setUserType(response.data.userType)
                        Cookies.set("compLoad","m ")
                        setIsAuth(1);
                    }
                    else {
                        navigate("/login");
                    }
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.log(`Something went wrong in auth check: ${error}`);
                navigate("/login");
            }
        }
        setTimeout(() => {
            checkAuth();
            setPage(location.pathname.split('/')[1]);
        }, 1200)
    }, )


    //loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(0);
        }, 2000) 
    }, []);
    return (
        <div className="main">
            {(() => {
                if (isAuth === 0) {
                    return (
                        <div className="loading">
                            <PiSpinnerBold className='pi' />
                            <p>Authenticating...</p>
                        </div>)
                } else if (isLoading === 1) {
                    return (
                        <div className="loading">
                            <PiSpinnerBold className='pi' />
                            <p>Loading...</p>
                        </div>)
                }
                else {
                    if (userType === "staff") {
                        return (
                            <div>
                                <NavBar handlePageChange={handlePageChange}
                                    page={page} />
                                <Routes>
                                    <Route path='/dashboard' element={<Dashboard />} />
                                    <Route path='/view-plan' element={<ViewPlanMain />} />
                                    <Route path='/venue' element={<AddVenue url = {url} />} />
                                    <Route path='/users' element={<User />} />
                                    <Route path='/dice' element={<RollDice />} />
                                    <Route path='/create-plan' element={<CreatePlan />} />
                                    <Route path='*' element={<h1>404 Page Not Found</h1>} />
                                </Routes>   
                            </div>
                        )
                    }
                    else if (userType === "demo") {
                        return (
                            <div>
                                <NavBar handlePageChange={handlePageChange}
                                    page={page} />
                                <Routes>
                                    <Route path='/dashboard' element={<Dashboard />} />
                                    {/* <Route path='/view-plan' element={<ViewPlanMain />} /> */}
                                    <Route path='*' element={<h1>Demo Users Not Allowed To View This Page</h1>} />
                                </Routes>
                            </div>
                        )
                    }
                    else {
                        return (

                            <div>
                                <NavBar handlePageChange={handlePageChange}
                                page={page} />
                                <h1>User Type: {userType}</h1>
                                <h1>Student Page Currently In Development</h1>
                            </div>
                        )
                    }
                }
            })()}
        </div>
    )
}

export default Main;