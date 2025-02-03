import './dashboard.css'
import Cookies from 'js-cookie';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BsPersonFillCheck } from "react-icons/bs";
import { BsPersonFillX } from "react-icons/bs";
import { PiDatabase, PiStudent } from "react-icons/pi";
import { BsBuildingExclamation } from "react-icons/bs";
import { BsBuildingCheck } from "react-icons/bs";

const Dashboard = ({ url }) => {
    const [isLoaded, setIsLoaded] = useState(0);
    const [data, setdata] = useState(0);
    const [skLoad, setskLoad] = useState(0)
    const [tbLoad, setTbLoad] = useState(0)
    const [tbDataLoad, setTbDataLoad] = useState(0)
    const [tableData, setTableData] = useState([])
    const [activePlan, setActivePlan] = useState(0)
    const [upcommingPlan, setUpcommingPlan] = useState(0)
    const [allottedVenue, setAllottedVenue] = useState(0)
    const [unusedVenues, setUnusedVenues] = useState(0)
    const [acitveStaff, setAcitveStaff] = useState(0)
    const [inactiveStaff, setInactiveStaff] = useState(0)
    const [activeStudents, setActiveStudents] = useState(0)
    const [inactiveStudents, setInactiveStudents] = useState(0)
    const [compMount, setcompMount] = useState(0)


    //check for comp loaded
    useEffect(() => {
        console.log(`compMount: ${compMount}`)
        const compLoad = Cookies.get("compLoad")
        let flag = 0
        if (compLoad) {
            console.log(`compLoad: "${compLoad}"`)
            compLoad.split(" ").forEach((ele) => {
                console.log(`ele: ${ele}`)
                if (ele == "dashboard") {
                    flag = 1
                }
            })
            if (flag == 1) {
                setcompMount(1);
                console.log(`set compMount: ${compMount}`)
            }
            else {
                Cookies.set("compLoad", compLoad + " dashboard")
            }
        }
        else {
            console.log(`Cokiee compLoad not Found`)
            Cookies.set("compLoad", compLoad + " dashboard")
        }

    }, [])


    const sk = <Skeleton
        className='skl'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        // sx={{ bgcolor: 'grey.1000' }}
        width={150}
        height={80}
        animation="wave" />;

    const sk1 = <Skeleton
        className='skl1'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        width={250}
        height={25}
        animation="wave" />;

    const sk2 = <Skeleton
        className='skl1'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        width={80}
        height={80}
        animation="wave" />;

    const sk3 = <Skeleton
        className='skl3'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        width={380}
        height={200} />;

    const sk4 = <Skeleton
        className='skl4'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        width={1800}
        height={750} />;

    const sk5 = <Skeleton
        className='skl5'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        width={80}
        height={20}
        animation="wave" />;

    const sk6 = <Skeleton
        className='skl5'
        baseColor="#d6d6d6a9"
        highlightColor="#f6f6f6"
        width={"100%"}
        height={50}
        count={25}
        animation="wave" />;


    //load sk
    useEffect(() => {
        console.log(`sk Load comp state: ${compMount}`)
        if (compMount == 1) {
            setskLoad(1)
        }
        else {
            setTimeout(() => {
                setskLoad(1)
            }, 1400);
        }
    }, [compMount])

    //table sk load
    useEffect(() => {
        if (compMount == 0) {
            setTimeout(() => {
                setTbLoad(1)
            }, 3000);
            setTimeout(() => {
                setTbDataLoad(1);
                setTableData([
                    { "pid": 1001, "venue": "Room A", "type": "Meeting", "staff": "John Doe", "studenCount": 25, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1002, "venue": "Room B", "type": "Workshop", "staff": "Jane Smith", "studenCount": 30, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1003, "venue": "Hall C", "type": "Seminar", "staff": "David Lee", "studenCount": 40, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1004, "venue": "Lab 1", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 22, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1005, "venue": "Room A", "type": "Presentation", "staff": "Michael Kim", "studenCount": 35, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1006, "venue": "Room B", "type": "Meeting", "staff": "John Doe", "studenCount": 28, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1007, "venue": "Hall C", "type": "Workshop", "staff": "Jane Smith", "studenCount": 38, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1008, "venue": "Lab 1", "type": "Seminar", "staff": "David Lee", "studenCount": 20, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1009, "venue": "Room A", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 42, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1010, "venue": "Room B", "type": "Presentation", "staff": "Michael Kim", "studenCount": 32, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1011, "venue": "Hall C", "type": "Meeting", "staff": "John Doe", "studenCount": 26, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1012, "venue": "Lab 1", "type": "Workshop", "staff": "Jane Smith", "studenCount": 37, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1013, "venue": "Room A", "type": "Seminar", "staff": "David Lee", "studenCount": 45, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1014, "venue": "Room B", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 24, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1015, "venue": "Hall C", "type": "Presentation", "staff": "Michael Kim", "studenCount": 31, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1016, "venue": "Lab 1", "type": "Meeting", "staff": "John Doe", "studenCount": 29, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1017, "venue": "Room A", "type": "Workshop", "staff": "Jane Smith", "studenCount": 34, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1018, "venue": "Room B", "type": "Seminar", "staff": "David Lee", "studenCount": 41, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1019, "venue": "Hall C", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 27, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1020, "venue": "Lab 1", "type": "Presentation", "staff": "Michael Kim", "studenCount": 36, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1021, "venue": "Room A", "type": "Meeting", "staff": "John Doe", "studenCount": 33, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1022, "venue": "Room B", "type": "Workshop", "staff": "Jane Smith", "studenCount": 39, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1023, "venue": "Hall C", "type": "Seminar", "staff": "David Lee", "studenCount": 21, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1024, "venue": "Lab 1", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 44, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1025, "venue": "Room A", "type": "Presentation", "staff": "Michael Kim", "studenCount": 23, "startTime": "9:00", "endTime": "10:00" }
                ])
            }, 5000);
        }
        else {
            setTbLoad(1)
            setTimeout(() => {
                setTbDataLoad(1);
                setTableData([
                    { "pid": 1001, "venue": "Room A", "type": "Meeting", "staff": "John Doe", "studenCount": 25, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1002, "venue": "Room B", "type": "Workshop", "staff": "Jane Smith", "studenCount": 30, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1003, "venue": "Hall C", "type": "Seminar", "staff": "David Lee", "studenCount": 40, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1004, "venue": "Lab 1", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 22, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1005, "venue": "Room A", "type": "Presentation", "staff": "Michael Kim", "studenCount": 35, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1006, "venue": "Room B", "type": "Meeting", "staff": "John Doe", "studenCount": 28, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1007, "venue": "Hall C", "type": "Workshop", "staff": "Jane Smith", "studenCount": 38, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1008, "venue": "Lab 1", "type": "Seminar", "staff": "David Lee", "studenCount": 20, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1009, "venue": "Room A", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 42, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1010, "venue": "Room B", "type": "Presentation", "staff": "Michael Kim", "studenCount": 32, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1011, "venue": "Hall C", "type": "Meeting", "staff": "John Doe", "studenCount": 26, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1012, "venue": "Lab 1", "type": "Workshop", "staff": "Jane Smith", "studenCount": 37, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1013, "venue": "Room A", "type": "Seminar", "staff": "David Lee", "studenCount": 45, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1014, "venue": "Room B", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 24, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1015, "venue": "Hall C", "type": "Presentation", "staff": "Michael Kim", "studenCount": 31, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1016, "venue": "Lab 1", "type": "Meeting", "staff": "John Doe", "studenCount": 29, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1017, "venue": "Room A", "type": "Workshop", "staff": "Jane Smith", "studenCount": 34, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1018, "venue": "Room B", "type": "Seminar", "staff": "David Lee", "studenCount": 41, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1019, "venue": "Hall C", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 27, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1020, "venue": "Lab 1", "type": "Presentation", "staff": "Michael Kim", "studenCount": 36, "startTime": "9:00", "endTime": "10:00" },
                    { "pid": 1021, "venue": "Room A", "type": "Meeting", "staff": "John Doe", "studenCount": 33, "startTime": "10:30", "endTime": "11:30" },
                    { "pid": 1022, "venue": "Room B", "type": "Workshop", "staff": "Jane Smith", "studenCount": 39, "startTime": "11:00", "endTime": "12:00" },
                    { "pid": 1023, "venue": "Hall C", "type": "Seminar", "staff": "David Lee", "studenCount": 21, "startTime": "9:30", "endTime": "10:30" },
                    { "pid": 1024, "venue": "Lab 1", "type": "Lab Session", "staff": "Sarah Brown", "studenCount": 44, "startTime": "10:00", "endTime": "11:00" },
                    { "pid": 1025, "venue": "Room A", "type": "Presentation", "staff": "Michael Kim", "studenCount": 23, "startTime": "9:00", "endTime": "10:00" }
                ])
            }, 500);
        }
    }, [compMount])

    // number animation
    useEffect(() => {
        var itr = 500;
        const inc = 100;
        //console.log(data)
        if (data) {
            if (activePlan < data.activePlan) {
                setActivePlan(activePlan + (data.activePlan / itr))
            }
            else {
                setActivePlan(data.activePlan)
            }
            itr = itr + inc;
            if (upcommingPlan < data.upcommingPlan) {
                setUpcommingPlan(upcommingPlan + (data.upcommingPlan / itr))
            }
            else {
                setUpcommingPlan(data.upcommingPlan)
            }
            itr = itr + inc;
            if (allottedVenue < data.allottedVenue) {
                setAllottedVenue(allottedVenue + (data.allottedVenue / itr))
            }
            else {
                setAllottedVenue(data.allottedVenue)
            }
            itr = itr + inc;
            if (unusedVenues < data.unusedVenues) {
                setUnusedVenues(unusedVenues + (data.unusedVenues / itr))
            }
            else {
                setUnusedVenues(data.unusedVenues)
            }
            itr = itr + inc;
            if (acitveStaff < data.acitveStaff) {
                setAcitveStaff(acitveStaff + (data.acitveStaff / itr))
            }
            else {
                setAcitveStaff(data.acitveStaff)
            }
            itr = itr + inc;
            if (inactiveStaff < data.inactiveStaff) {
                setInactiveStaff(inactiveStaff + (data.inactiveStaff / itr))
            }
            else {
                setInactiveStaff(data.inactiveStaff)
            }
            itr = itr + inc;
            if (activeStudents < data.activeStudents) {
                setActiveStudents(activeStudents + (data.activeStudents / itr))
            }
            else {
                setActiveStudents(data.activeStudents)
            }
            itr = itr + inc;
            if (inactiveStudents < data.inactiveStudents) {
                setInactiveStudents(inactiveStudents + (data.inactiveStudents / itr))
            }
            else {
                setInactiveStudents(data.inactiveStudents)
            }
        }
    }, [data, activePlan, upcommingPlan, allottedVenue, unusedVenues, acitveStaff, inactiveStaff, activeStudents, inactiveStudents]);

    //sumulate api call
    useEffect(() => {
        const apicall = async () => {
            setdata({
                activePlan: 46,
                upcommingPlan: 73,
                allottedVenue: 93,
                unusedVenues: 24,
                acitveStaff: 234,
                inactiveStaff: 32,
                activeStudents: 4372,
                inactiveStudents: 215
            })

        }
        if (compMount == 0) {
            setIsLoaded(1);
            setTimeout(() => {
                apicall();
            }, 2400);
        }
        else {
            setIsLoaded(1);
            apicall();
        }

    }, [compMount])



    return (
        <div className="dashboard">
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="body">
                <div className="sec1">
                    <div className="ctnr1">
                        {skLoad ? (
                            <div>
                                <div className="box b1">
                                    <div className="icon">{isLoaded ? (<FaRegCalendarCheck />) : (sk2)}</div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(activePlan)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Current Active Plan') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box b2">
                                    <div className="icon">{isLoaded ? (<FaRegCalendarPlus />) : (sk2)}
                                    </div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(upcommingPlan)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Upcomming Plan') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box b3">
                                    <div className="icon">{isLoaded ? (<BsBuildingCheck />) : (sk2)}</div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(allottedVenue)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Allotted Venues') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box b4">
                                    <div className="icon">{isLoaded ? (<BsBuildingExclamation />) : (sk2)}</div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(unusedVenues)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Unused Venues') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>) : (<div className="sk">{sk3}{sk3}{sk3}{sk3}</div>)}
                    </div>
                    <div className="ctnr1">
                        {skLoad ? (
                            <div>
                                <div className="box b1">
                                    <div className="icon">{isLoaded ? (<BsPersonFillCheck />) : (sk2)}</div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(acitveStaff)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Active Staff') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box b2">
                                    <div className="icon">{isLoaded ? (<BsPersonFillX />) : (sk2)}
                                    </div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(inactiveStaff)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Inactive Staff') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box b3">
                                    <div className="icon">{isLoaded ? (<PiStudent />) : (sk2)}</div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(activeStudents)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Active Students') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box b4">
                                    <div className="icon">{isLoaded ? (<PiStudent />) : (sk2)}</div>
                                    <div className="text">
                                        <div className="nums">{isLoaded ? (parseInt(inactiveStudents)) : (sk)}</div>
                                        <div className="para">
                                            <p>{isLoaded ? ('Inactive Students') : (sk1)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>) : (<div className="sk">{sk3}{sk3}{sk3}{sk3}</div>)}
                    </div>
                </div>
                <div className="sec2">
                    {tbLoad ? (
                        <div className="sec2b">
                            <h1>{tbLoad ? ("Today's Plan") : (sk1)}</h1>
                            <div className="table">
                                <div className="head">
                                    <div className="row">
                                        <div className="cell tb-id"><p>ID</p></div>
                                        <div className="cell tb-ve"><p>Venue</p></div>
                                        <div className="cell tb-ty"><p>Type</p></div>
                                        <div className="cell tb-sf"><p>Staff</p></div>
                                        <div className="cell tb-sc"><p>Student Count</p></div>
                                        <div className="cell tb-st"><p>Start Time</p></div>
                                        <div className="cell tb-et"><p>End Time</p></div>
                                    </div>
                                </div>
                                <div className="body">
                                    {tbDataLoad ? (tableData.map((ele) => (
                                        <div className="row" key={ele.pid}>
                                            <div className="cell tb-id"><p>{ele.pid}</p></div>
                                            <div className="cell tb-ve"><p>{ele.venue}</p></div>
                                            <div className="cell tb-ty"><p>{ele.type}</p></div>
                                            <div className="cell tb-sf"><p>{ele.staff}</p></div>
                                            <div className="cell tb-sc"><p>{ele.studenCount}</p></div>
                                            <div className="cell tb-st"><p>{ele.startTime}</p></div>
                                            <div className="cell tb-et"><p>{ele.endTime}</p></div>
                                        </div>
                                    ))) : (
                                        sk6
                                    )}
                                </div>
                            </div>

                        </div>
                    ) : (sk4)}
                </div>
            </div>

        </div >
    )
};

export default Dashboard;