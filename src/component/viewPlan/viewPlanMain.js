import './viewPlan.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPlanMain = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        axios.get('https://campusschedulebackend-1.onrender.com/api/v1/mail/getMail')
            .then(res => {
                if (res.data.code === 1) {
                    setPlans(res.data.data);
                }
            })
            .catch(err => {
                console.error("Failed to fetch plans:", err);
            });
    }, []);

    return (
        <div className="viewPlan">
            <div className="title">
                <h1>View Plans</h1>
            </div>
            <div className="body">
                <div className="sec1">
                    {plans.map((plan, index) => (
                        <div className="planBlock" key={index}>
                            <h2>{plan.name}</h2>
                            <p><strong>Type:</strong> {plan.type}</p>
                            <p><strong>Date:</strong> {plan.date}</p>
                            <p><strong>Start Time:</strong> {plan.startTime}</p>
                            <p><strong>End Time:</strong> {plan.endTime}</p>
                            <p><strong>Venue:</strong> {plan.venue}</p>
                            <p><strong>Total Users:</strong> {plan.mail.length}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewPlanMain;
