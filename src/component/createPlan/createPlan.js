import './createPlan.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function CreatePlan() {

    const [inputText1, setInputText1] = useState('');
    const [suggestions1, setSuggestions1] = useState([]);
    const [selectedMails1, setSelectedMails1] = useState([]);


    const handleChange1 = (e) => {
        const value = e.target.value;
        setInputText1(value);
        setSuggestions1(
            mailArray.filter(mail => mail.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const handleSuggestionClick1 = (value) => {
        setInputText1(value);
        setSuggestions1([]);
    };

    const handleAdd1 = () => {
        if (inputText1 && !selectedMails1.includes(inputText1)) {
            setSelectedMails1(prev => [...prev, inputText1]);
        }
        setInputText1('');
        setSuggestions1([]);
    };

    const handleRemove1 = (mail) => {
        setSelectedMails1(prev => prev.filter(m => m !== mail));
    };


    //-------------------
    const [inputText2, setInputText2] = useState('');
    const [suggestions2, setSuggestions2] = useState([]);
    const [selectedMails2, setSelectedMails2] = useState([]);


    const handleChange2 = (e) => {
        const value = e.target.value;
        setInputText2(value);
        setSuggestions2(
            mailArray.filter(mail => mail.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const handleSuggestionClick2 = (value) => {
        setInputText2(value);
        setSuggestions2([]);
    };

    const handleAdd2 = () => {
        if (inputText2 && !selectedMails2.includes(inputText2)) {
            setSelectedMails2(prev => [...prev, inputText2]);
        }
        setInputText2('');
        setSuggestions2([]);
    };

    const handleRemove2 = (mail) => {
        setSelectedMails2(prev => prev.filter(m => m !== mail));
    };
    // ----------------
    const [inputText3, setInputText3] = useState('');
    const [suggestions3, setSuggestions3] = useState([]);
    const [selectedMails3, setSelectedMails3] = useState([]);


    const handleChange3 = (e) => {
        const value = e.target.value;
        setInputText3(value);
        setSuggestions3(
            mailArray.filter(mail => mail.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const handleSuggestionClick3 = (value) => {
        setInputText3(value);
        setSuggestions3([]);
    };

    const handleAdd3 = () => {
        if (inputText3 && !selectedMails3.includes(inputText3)) {
            setSelectedMails3(prev => [...prev, inputText3]);
        }
        setInputText3('');
        setSuggestions3([]);
    };

    const handleRemove3 = (mail) => {
        setSelectedMails3(prev => prev.filter(m => m !== mail));
    };


    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [venue, setVenue] = useState('');
    const [venueOptions, setVenueOptions] = useState([]);

    useEffect(() => {
        axios.get("https://campusschedulebackend-1.onrender.com/api/v1/venue")
            .then(res => {
                const active = res.data.venue.filter(v => v.status === "Active").map(v => v.name);
                setVenueOptions(active);
            })
            .catch(err => console.error("Venue fetch error", err));
    }, []);


    const handleSubmitPlan = () => {
        if (!name || !type || !date || !startTime || !endTime || !venue) {
            alert("Fill all fields");
            return;
        }
    
        const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').join('-');
        const mail = [...selectedMails1, ...selectedMails2].filter(m => !selectedMails3.includes(m));
    
        axios.post('https://campusschedulebackend-1.onrender.com/api/v1/mail/add-queue', {
            name, type, date: formattedDate, startTime, endTime, venue, mail
        })
            .then(res => {
                alert("Plan created successfully!");
            })
            .catch(err => {
                alert("Error submitting plan");
                console.error(err);
            });
    };

    const mailArray = [
        'moneshvel.al22@bitsathy.ac.in',
        'harish.al22@bitsathy.ac.in',
        'varunesh.cs22@bitsathy.ac.in'
    ];


    return (
        <div className="createPlan">
            <div className="title">
                <h1>Create Plan</h1>
            </div>
            <div className="body">

                <div className="sec1">
                    <h1>Plan Details</h1>
                    <div className="inputs">
                        <div className="inputrow">
                            <div className="title"><p>Plan Name</p></div>
                            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />                        </div>
                        <div className="inputrow">
                            <div className="title"><p>Plan Type</p></div>
                            <input type="text" placeholder='select' value={type} onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div className="inputrow">
                            <div className="title"><p>Date</p></div>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="inputrow">
                            <div className="title"><p>venue</p></div>
                            <select value={venue} onChange={(e) => setVenue(e.target.value)}>
                                <option value="">Select Venue</option>
                                {venueOptions.map((v, idx) => (
                                    <option key={idx} value={v}>{v}</option>
                                ))}
                            </select>
                        </div>
                        <div className="inputrow">
                            <div className="title"><p>Start Time</p></div>
                            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                        </div>
                        <div className="inputrow">
                            <div className="title"><p>End Time</p></div>
                            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="groups">
                        <div className="groupbar">
                            <div className="title"><p>Select Users</p></div>
                            <div className="content">
                                {selectedMails1.length === 0 ? (
                                    <p className='empty'>No Users Selected...</p>
                                ) : (
                                    selectedMails1.map((mail, index) => (
                                        <div className="maildisplay" key={index}>
                                            <p>{mail}</p>
                                            <span onClick={() => handleRemove1(mail)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                                ❌
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="bottom">
                                <div className="autocomplete">
                                    <input
                                        type="text"
                                        placeholder='Select'
                                        value={inputText1}
                                        onChange={handleChange1}
                                    />
                                    {suggestions1.length > 0 && (
                                        <ul className="suggestion-list">
                                            {suggestions1.map((suggestion, index) => (
                                                <li key={index} onClick={() => handleSuggestionClick1(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button onClick={handleAdd1}>Add</button>
                            </div>
                        </div>


                        <div className="groupbar">
                            <div className="title"><p>Include Users</p></div>
                            <div className="content">
                                {selectedMails2.length === 0 ? (
                                    <p className='empty'>No Users Selected...</p>
                                ) : (
                                    selectedMails2.map((mail, index) => (
                                        <div className="maildisplay" key={index}>
                                            <p>{mail}</p>
                                            <span onClick={() => handleRemove2(mail)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                                ❌
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="bottom">
                                <div className="autocomplete">
                                    <input
                                        type="text"
                                        placeholder='Select'
                                        value={inputText2}
                                        onChange={handleChange2}
                                    />
                                    {suggestions2.length > 0 && (
                                        <ul className="suggestion-list">
                                            {suggestions2.map((suggestion, index) => (
                                                <li key={index} onClick={() => handleSuggestionClick2(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button onClick={handleAdd2}>Add</button>
                            </div>
                        </div>
                        <div className="groupbar">
                            <div className="title"><p>Exclude Users</p></div>
                            <div className="content">
                                {selectedMails3.length === 0 ? (
                                    <p className='empty'>No Users Selected...</p>
                                ) : (
                                    selectedMails3.map((mail, index) => (
                                        <div className="maildisplay" key={index}>
                                            <p>{mail}</p>
                                            <span onClick={() => handleRemove3(mail)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                                ❌
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="bottom">
                                <div className="autocomplete">
                                    <input
                                        type="text"
                                        placeholder='Select'
                                        value={inputText3}
                                        onChange={handleChange3}
                                    />
                                    {suggestions3.length > 0 && (
                                        <ul className="suggestion-list">
                                            {suggestions3.map((suggestion, index) => (
                                                <li key={index} onClick={() => handleSuggestionClick3(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <button onClick={handleAdd3}>Add</button>
                            </div>
                        </div>

                    </div>

                    <div className="createbtn">
                        <button onClick={handleSubmitPlan}>Create Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePlan