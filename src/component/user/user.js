import './user.css';
import { IoMdSearch, IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaEdit } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { IoTrashOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const User = () => {
    const [runOnce,] = useState(0);
    const [venueData, setVenueData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [showEdit, setShowEdit] = useState(0)
    const [showAdd, setShowAdd] = useState(0)
    const [editData, setEditData] = useState(0)
    const [search, setSearch] = useState("")

    const [showDelete, setShowDelete] = useState(0)
    const [deleteID, setDeleteID] = useState(0)
    const [deleteName, setDeleteName] = useState(0)
    const [showPopup, setShowPopup] = useState(0)
    const [popupMSG, setPopupMSG] = useState(0)

    const [editName, setEditName] = useState(0)
    const [editType, setEditType] = useState(0)
    const [editCapa, setEditCapa] = useState(0)
    const [editStat, setEditStat] = useState(0)
    const [isSaved, SetisSaved] = useState(1)

    const [addName, setAddName] = useState(0)
    const [addType, setAddType] = useState(0)
    const [addCapa, setAddCapa] = useState(0)
    const [addStat, setAddStat] = useState(0)


    async function load() {
        setVenueData([]);
        setDisplayData([]);
        setTimeout(() => {
            const data = [
                { id: 1001, name: "MONESHVEL S T", email: "moneshvel.al22@bitsathy.ac.in", rollNo: "7376222AL174", type: "Staff", password: "A1b2C3d4" },
                { id: 1002, name: "DHANYATHA K", email: "dhanyatha.cs22@bitsathy.ac.in", rollNo: "7376222CS001", type: "Student", password: "XyZ45678" },
                { id: 1003, name: "MOHAMED ISMAIL J", email: "mohamedismail.se22@bitsathy.ac.in", rollNo: "7376222SE002", type: "Student", password: "P@ssword9" },
                { id: 1004, name: "DHAYANIDHI M", email: "dhayanidhi.it22@bitsathy.ac.in", rollNo: "7376222IT003", type: "Student", password: "1Q2w3E4r" },
                { id: 1005, name: "HARSHINI E", email: "harshini.it22@bitsathy.ac.in", rollNo: "7376222IT004", type: "Staff", password: "Tiger2024!" },
                { id: 1006, name: "KAVIN S", email: "KAVIN.CB22@bitsathy.ac.in", rollNo: "7376222CB005", type: "Staff", password: "QWERTYasdf" },
                { id: 1007, name: "DHARANEEDHARAN V", email: "dharaneedharan.al22@bitsathy.ac.in", rollNo: "7376222AL006", type: "Student", password: "SecureMe123" },
                { id: 1008, name: "LEGASRI V M", email: "legasri.cd22@bitsathy.ac.in", rollNo: "7376222CD007", type: "Student", password: "Password!@34" },
                { id: 1009, name: "HARIZIBAM V", email: "harizibam.al22@bitsathy.ac.in", rollNo: "7376222AL008", type: "Staff", password: "H@r1Z1b@M" },
                { id: 1010, name: "KATHIRESAN V", email: "KATHIRESAN.IT22@bitsathy.ac.in", rollNo: "7376222IT009", type: "Student", password: "Kathiresan123!" },
                { id: 1011, name: "VAISHNAVI B", email: "vaishnavi.al22@bitsathy.ac.in", rollNo: "7376222AL010", type: "Student", password: "Vaishn@Vi678" },
                { id: 1012, name: "GAYATHIRI V", email: "GAYATHIRI.CT22@bitsathy.ac.in", rollNo: "7376222CT011", type: "Staff", password: "Gay@th1r1" },
                { id: 1013, name: "ANTONYVIJAY S", email: "antonyvijay.cd22@bitsathy.ac.in", rollNo: "7376222CD012", type: "Student", password: "Antony@V1J@Y" },
                { id: 1014, name: "SANTHOSH K S", email: "santhosh.mc22@bitsathy.ac.in", rollNo: "7376222MC013", type: "Student", password: "S@nTh0sh99" },
                { id: 1015, name: "KAVIRAJ K R", email: "kaviraj.al22@bitsathy.ac.in", rollNo: "7376222AL014", type: "Student", password: "K@v1r@j$22" },
                { id: 1016, name: "JEYASUHIN J", email: "jeyasuhin.ad22@bitsathy.ac.in", rollNo: "7376222AD015", type: "Staff", password: "J3ya$uh1n" },
                { id: 1017, name: "KANESHKHA T", email: "kaneshkha.ad22@bitsathy.ac.in", rollNo: "7376222AD016", type: "Student", password: "Kan3shkh@777" },
                { id: 1018, name: "NIDHEESHVAR A G", email: "NIDHEESHVAR.EC22@bitsathy.ac.in", rollNo: "7376222EC017", type: "Staff", password: "N1dhee$hvar" },
                { id: 1019, name: "HARINI S", email: "harini.cs22@bitsathy.ac.in", rollNo: "7376222CS018", type: "Student", password: "H@r1n1#555" },
                { id: 1020, name: "PRAMILA V", email: "PRAMILA.CS22@bitsathy.ac.in", rollNo: "7376222CS019", type: "Student", password: "P#am1la2024" }
            ];
            setVenueData(data);
            setDisplayData(data); // ✅ Fix: Setting displayData at the same time
        }, 3000);

    }
    const backgroundColor = {
        A: "red", B: "blue", C: "green", D: "yellow",
        E: "orange", F: "purple", G: "pink", H: "cyan",
        I: "brown", J: "teal", K: "lime", L: "indigo",
        M: "magenta", N: "olive", O: "gold", P: "silver",
        Q: "violet", R: "navy", S: "coral", T: "tan",
        U: "salmon", V: "maroon", W: "skyblue", X: "lavender",
        Y: "turquoise", Z: "khaki"
    };

    const sk1 = (
        <Skeleton
            className='sk1'
            baseColor="#d6d6d6a9"
            highlightColor="#f6f6f6"
            width={"300px"}
            height={"200px"}
            animation="wave"
        />
    );


    function handleEdit(id) {
        const result = venueData.find((item) => item.id === id)
        setEditData(result)
        setEditName(result.name)
        setEditCapa(result.max_capacity)
        setEditType(result.type)
        setEditStat(result.status)
        setShowEdit(1)
    }
    function handleSaveEdit() {
        SetisSaved(0);
        setTimeout(() => {
            SetisSaved(1);
            setShowEdit(0)
            load()
            setShowPopup(0)
            setPopupMSG(<span>Successfully Edited <span className='bold'>{editName}</span></span>)
            setShowPopup(1)
        }, 2000)

    }
    function handleAdd() {
        setAddName(null)
        setAddType(null)
        setAddCapa(null)
        setAddStat(null)
        setShowAdd(1)
    }
    function handleSaveAdd() {
        SetisSaved(0);
        setTimeout(() => {
            SetisSaved(1);
            setShowAdd(0)
            load()
        }, 2000)
    }

    function handleDelete(id) {
        const result = venueData.find((item) => item.id === id)
        setDeleteName(result.name)
        setDeleteID(id)
        setShowDelete(1)

    }
    function handleSaveDelete() {
        SetisSaved(0);
        setTimeout(() => {
            SetisSaved(1);
            setShowDelete(0)
            load()
        }, 2000)
    }

    useEffect(() => {
        if (search === "") {
            setDisplayData(venueData);
        } else {
            const result = venueData.filter((item) =>
                Object.values(item).some(value =>
                    value.toString().toLowerCase().includes(search.toLowerCase())
                )
            );
            setDisplayData(result);
        }
    }, [search, venueData]);

    useEffect(() => {
        load()
    }, [runOnce]);

    return (
        <div className="user">

            {showPopup ? (
                <div className="vpopup">
                    <p className="msg">{popupMSG}</p>
                    <IoMdClose className='close' onClick={() => { setShowPopup(0); }} />
                </div>
            ) : (
                <div></div>
            )}

            {showDelete ? (
                <div className="deletebox">
                    <div className="title">
                        <h1>Delete User</h1>
                        <div className="close">
                            <IoMdClose onClick={() => { setShowDelete(0) }} />
                        </div>
                    </div>
                    <div className="body">
                        <p>Do you want to delete <span>{deleteName}</span>?</p>

                    </div>
                    <div className="save-btn">
                        {isSaved ? (
                            <button onClick={() => { handleSaveDelete() }}>Delete User</button>
                        ) : (
                            <button><VscLoading className='rotate' /></button>
                        )}

                    </div>
                </div>

            ) : (<></>)}
            {showEdit ? (
                <div className="editbox">
                    <div className="title">
                        <h1>Edit User</h1>
                        <div className="close">
                            <IoMdClose onClick={() => { setShowEdit(0) }} />
                        </div>
                    </div>
                    <div className="body">
                        <div className="row">
                            <p>ID:</p>
                            <p className='idid'>{editData.id}</p>
                            <div className="icon"><MdLockOutline /></div>
                        </div>
                        <div className="row">
                            <p>Name:</p>
                            <input type="text"
                                onChange={(e) => { setEditName(e.target.value) }}
                                value={editName} />
                        </div>
                        <div className="row">
                            <p>Type:</p>
                            <select value={editType} onChange={(e) => { setEditType(e.target.value) }}>
                                <option value="Classroom">Classroom</option>
                                <option value="Seminar">Seminar</option>
                                <option value="Lab">Lab</option>
                            </select>
                        </div>
                        <div className="row">
                            <p>Capacity:</p>
                            <input type='number'
                                onChange={(e) => { setEditCapa(e.target.value) }}
                                value={editCapa} />
                        </div>
                        <div className="row">
                            <p>Status:</p>
                            <select value={editStat} onChange={(e) => { setEditStat(e.target.value) }}>
                                <option value="Active">Active</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                        </div>
                    </div>
                    <div className="save-btn">
                        {isSaved ? (
                            <button onClick={() => { handleSaveEdit() }}>Save Changes</button>
                        ) : (
                            <button><VscLoading className='rotate' /></button>
                        )}

                    </div>
                </div>

            ) : (<></>)}

            {showAdd ? (
                <div className="editbox">
                    <div className="title">
                        <h1>Add New User</h1>
                        <div className="close">
                            <IoMdClose onClick={() => { setShowAdd(0) }} />
                        </div>
                    </div>
                    <div className="body">
                        <div className="row">
                            <p>ID:</p>
                            <p className='idid'>Auto Generate</p>
                            <div className="icon"><MdLockOutline /></div>
                        </div>
                        <div className="row">
                            <p>Name:</p>
                            <input type="text"
                                onChange={(e) => { setAddName(e.target.value) }}
                                value={addName} />
                        </div>
                        <div className="row">
                            <p>Type:</p>
                            <select value={addType} onChange={(e) => { setAddType(e.target.value) }}>
                                <option value="Student">Student</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                        <div className="row">
                            <p>Status:</p>
                            <select value={addStat} onChange={(e) => { setAddStat(e.target.value) }}>
                                <option value="Active">Active</option>
                                <option value="Maintenance">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="save-btn">
                        {isSaved ? (
                            <button onClick={() => { handleSaveAdd() }}>Add New</button>
                        ) : (
                            <button><VscLoading className='rotate' /></button>
                        )}

                    </div>
                </div>

            ) : (<></>)}
            <div className="title">
                <h1>User Details</h1>
            </div>
            <div className={(showEdit || showAdd || showDelete) ? "body blur" : "body"}>
                <div className="sec1">
                    <div className="searchsec">
                        <div className="searchbox">
                            <IoMdSearch className='icon' />
                            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='Search Users by id, name, type, capacity, status' />
                        </div>
                        <div onClick={() => { handleAdd() }} className="addvenue">
                            <IoMdAdd className='icon' />
                            <p>ADD NEW USER</p>
                        </div>
                    </div>
                    <div className="userbox">
                        <div className="head">
                            <div className="row">
                                <div className="id"><p>ID</p></div>
                                <div className="profile"><p>Profile</p></div>
                                <div className="name"><p>Name</p></div>
                                <div className="rollNo"><p>Roll Number</p></div>
                                <div className="email"><p>Email</p></div>
                                <div className="usertype"><p>User Type</p></div>
                                <div className="view"><p>View</p></div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="box">
                                {venueData ? (
                                    displayData.map((item) => (
                                        <div className="row">
                                            <div className="id"><p>{item.id}</p></div>
                                            <div className="profile"><span className="circle" style={{backgroundColor:(backgroundColor[item.name[0]] || "black")}}><p>{item.name[0]}</p></span></div>
                                            <div className="name"><p>{item.name.toUpperCase()}</p></div>
                                            <div className="rollNo"><p>{item.rollNo.toUpperCase()}</p></div>
                                            <div className="email"><p>{item.email}</p></div>
                                            <div className="usertype"><p>{item.type==="Student" ?(<span className="ggreen"><p>Student</p></span>):(<span className="blue"><p>Staff</p></span>) }</p></div>
                                            <div className="view"><div className="icon"><IoEyeOutline /></div></div>
                                        </div>
                                    ))
                                ) : (
                                    <p>loading...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
