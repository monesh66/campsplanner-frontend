import './addVenue.css';
import { IoMdSearch, IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaEdit } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { IoTrashOutline } from "react-icons/io5";
import axios from 'axios';

const AddVenue = ({ url }) => {
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
    const [editid, setEditid] = useState(0)
    const [isSaved, SetisSaved] = useState(1)

    const [addName, setAddName] = useState(0)
    const [addType, setAddType] = useState(0)
    const [addCapa, setAddCapa] = useState(0)
    const [addStat, setAddStat] = useState(0)




    async function load() {
        setVenueData([]);
        setDisplayData([]);
        let data = [];

        try {
            const response = await axios.get(
                url + "/api/v1/venue"
            )

            if (response.status === 200) {
                data = response.data.venue;
            }
            else {
                setShowPopup(0)
                setPopupMSG(<span>Something Went Wrong While Loading The data</span>)
                setShowPopup(1)
                data = []
            }
        }
        catch {
            setShowPopup(0)
            setPopupMSG(<span>Something Went Wrong While Loading The data</span>)
            setShowPopup(1)
            data = []
        }


        setTimeout(() => {
            // const data = [
            //     { id: 1001, name: "SF 201", max_capacity: 60, type: "classroom", status: "Active" },
            //     { id: 1002, name: "SF 202", max_capacity: 50, type: "classroom", status: "Active" },
            //     { id: 1003, name: "SF 203", max_capacity: 40, type: "lab", status: "Maintenance" },
            //     { id: 1004, name: "SF 204", max_capacity: 30, type: "hall", status: "Active" },
            //     { id: 1005, name: "SF 205", max_capacity: 70, type: "auditorium", status: "Maintenance" },
            //     { id: 2001, name: "ME 201", max_capacity: 60, type: "classroom", status: "Active" },
            //     { id: 2002, name: "ME 202", max_capacity: 50, type: "classroom", status: "Active" },
            //     { id: 2003, name: "ME 203", max_capacity: 40, type: "Lab", status: "Maintenance" },
            //     { id: 2004, name: "ME 204", max_capacity: 30, type: "hall", status: "Active" },
            //     { id: 2005, name: "ME 205", max_capacity: 70, type: "auditorium", status: "Active" },
            // ];

            setVenueData(data);
            setDisplayData(data); // ✅ Fix: Setting displayData at the same time
        }, 3000);

    }

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
        setEditid(id)
        setEditName(result.name)
        setEditCapa(result.max_capacity)
        setEditType(result.type)
        setEditStat(result.status)
        setShowEdit(1)
    }
    async function handleSaveEdit() {
        SetisSaved(0);
        try {
            console.log(addType, addStat)
            const response = await axios.post(
                url + "/api/v1/venue/edit",
                {
                    id: editid,
                    name: editName,
                    type: editType,
                    max_capacity: editCapa,
                    status: editStat
                }
            )
            console.log(response)
            if (response.data.code === 1) {
                SetisSaved(1);
                setShowEdit(0)
                load()
                setShowPopup(0)
                setPopupMSG(<span>Successfully Edited <span className='bold'>{editName}</span></span>)
                setShowPopup(1)
                setTimeout(() => {
                    setShowPopup(0)
                }, 5000);
            }
            else{
                SetisSaved(1);
                setShowEdit(0)
                load()
                setShowPopup(0)
                setPopupMSG(<span>Failed To Edit <span className='bold'>{editName}</span></span>)
                setShowPopup(1)
            }
        }
        catch (err) {
            console.log(err)
            SetisSaved(1);
            setShowEdit(0)
            load()
            setShowPopup(0)
            setPopupMSG(<span>Failed To  Edit <span className='bold'>{editName}</span></span>)
            setShowPopup(1)
        }

    }
    function handleAdd() {
        setAddName(null)
        setAddType("select")
        setAddCapa(null)
        setAddStat("select")
        setShowAdd(1)
    }
    async function handleSaveAdd() {
        SetisSaved(0);
        try {
            console.log(addType, addStat)
            const response = await axios.post(
                url + "/api/v1/venue/add",
                {
                    name: addName,
                    type: addType,
                    max_capacity: addCapa,
                    status: addStat
                }
            )
            console.log(response)
            if (response.data.code === 1) {
                SetisSaved(1);
                setShowAdd(0)
                load()
                setShowPopup(0)
                setPopupMSG(<span>Successfully Added <span className='bold'>{addName}</span></span>)
                setShowPopup(1)
                setTimeout(() => {
                    setShowPopup(0)
                }, 5000);
            }
            else{
                SetisSaved(1);
                setShowAdd(0)
                load()
                setShowPopup(0)
                setPopupMSG(<span>Error While Adding <span className='bold'>{addName}</span></span>)
                setShowPopup(1)
            }
        }
        catch (err) {
            console.log(err)
            SetisSaved(1);
                setShowAdd(0)
                load()
                setShowPopup(0)
                setPopupMSG(<span>Error While Adding <span className='bold'>{addName}</span></span>)
                setShowPopup(1)
        }

    }

    function handleDelete(id) {
        const result = venueData.find((item) => item.id === id)
        setDeleteName(result.name)
        setDeleteID(id)
        setShowDelete(1)

    }
    async function handleSaveDelete() {
        SetisSaved(0);
        try {
            console.log(addType, addStat)
            const response = await axios.post(
                url + "/api/v1/venue/delete",
                {
                    id: deleteID,
                }
            )
            console.log(response)
            if (response.data.code === 1) {
                SetisSaved(1);
                setShowEdit(0)
                load()
                setShowDelete(0)
                setPopupMSG(<span>Successfully Deleted <span className='bold'>{deleteName}</span></span>)
                setShowPopup(1)
                setTimeout(() => {
                    setShowPopup(0)
                }, 5000);
            }
            else{
                SetisSaved(1);
                setShowDelete(0)
                load()
                setShowPopup(0)
                setPopupMSG(<span>Failed To Delete <span className='bold'>{editName}</span></span>)
                setShowPopup(1)
            }
        }
        catch (err) {
            console.log(err)
            SetisSaved(1);
            setShowDelete(0)
            load()
            setShowPopup(0)
            setPopupMSG(<span>Failed To  Delete <span className='bold'>{editName}</span></span>)
            setShowPopup(1)
        }


            // SetisSaved(1);
            // setShowDelete(0)
            // load()

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
        <div className="venue">

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
                        <h1>Delete Venue</h1>
                        <div className="close">
                            <IoMdClose onClick={() => { setShowDelete(0) }} />
                        </div>
                    </div>
                    <div className="body">
                        <p>Do you want to delete <span>{deleteName}</span>?</p>

                    </div>
                    <div className="save-btn">
                        {isSaved ? (
                            <button onClick={() => { handleSaveDelete() }}>Delete Venue</button>
                        ) : (
                            <button><VscLoading className='rotate' /></button>
                        )}

                    </div>
                </div>

            ) : (<></>)}
            {showEdit ? (
                <div className="editbox">
                    <div className="title">
                        <h1>Edit Venue</h1>
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
                        <h1>Add New Venue</h1>
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
                                <option value="select">---Select---</option>
                                <option value="Classroom">Classroom</option>
                                <option value="Seminar">Seminar</option>
                                <option value="Lab">Lab</option>
                            </select>
                        </div>
                        <div className="row">
                            <p>Capacity:</p>
                            <input type='number'
                                onChange={(e) => { setAddCapa(e.target.value) }}
                                value={addCapa} />
                        </div>
                        <div className="row">
                            <p>Status:</p>
                            <select value={addStat} onChange={(e) => { setAddStat(e.target.value) }}>
                                <option value="select">---Select---</option>
                                <option value="Active">Active</option>
                                <option value="Maintenance">Maintenance</option>
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
                <h1>Venue</h1>
            </div>
            <div className={(showEdit || showAdd || showDelete) ? "body blur" : "body"}>
                <div className="sec1">
                    <div className="searchsec">
                        <div className="searchbox">
                            <IoMdSearch className='icon' />
                            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='Search Venue by id, name, type, capacity, status' />
                        </div>
                        <div onClick={() => { handleAdd() }} className="addvenue">
                            <IoMdAdd className='icon' />
                            <p>ADD NEW VENUE</p>
                        </div>
                    </div>
                    <div className="venuebox">
                        {venueData.length === 0 ? (
                            <div className="box">
                                {[...Array(20)].map((_, index) => (

                                    <div id={index + 1} className="box-item">
                                        {sk1}
                                    </div>

                                ))}
                            </div>
 
                        ) : (
                            <div className="box">
                                {displayData.map((ele) => ( // ✅ Fix: Added return statement
                                    <div key={ele.id} className='box-item'>
                                        <div className="venuebox">
                                            <p>ID: <span className='id'>{ele.id}</span></p>
                                            <p>Name: <span className='name'>{ele.name}</span></p>
                                            <p>Type: <span className='type'>{ele.type}</span></p>
                                            <p>Capacity: <span className='capacity'>{ele.max_capacity}</span></p>
                                            <p>Status: {ele.status === "Active" ? (
                                                <span className='green'>Active</span>
                                            ) : (
                                                <span className='red'>{ele.status}</span>
                                            )}</p>
                                            <div onClick={() => { handleEdit(ele.id) }} className="edit"><FaEdit /></div>
                                            <div onClick={() => { handleDelete(ele.id) }} className="delete"><IoTrashOutline /></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVenue;
