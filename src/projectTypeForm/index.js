import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function ProjectTypeForm() {

    const [projectHourlyRate, setProjectHourlyRate] = useState('');
    const [budgetHours, setBudgetHours] = useState('');
    const [sendEmailAlerts1, setSendEmailAlerts1] = useState(false);
    const [sendEmailAlerts2, setSendEmailAlerts2] = useState(false);
    const [alertThreshold, setAlertThreshold] = useState("80.00");
    const [activeTab, setActiveTab] = useState('Time & Materials');


    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('projectTypeData'));
        if (savedData) {
            setProjectHourlyRate(savedData.projectHourlyRate);
            setBudgetHours(savedData.budgetHours);
            setSendEmailAlerts1(savedData.sendEmailAlerts1);
            setSendEmailAlerts2(savedData.sendEmailAlerts2);
            setAlertThreshold(savedData.alertThreshold);
        }
    }, []);

    const handleNext = () => {
        const formData = {
            projectHourlyRate,
            budgetHours,
            sendEmailAlerts1,
            sendEmailAlerts2,
            alertThreshold,
        };
        localStorage.setItem('projectTypeData', JSON.stringify(formData));
        // Move to the next component or perform the desired action
        console.log('Form data saved to local storage');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNext();
        // Navigate to the next component
        {projectHourlyRate && budgetHours && sendEmailAlerts1 && sendEmailAlerts2 && alertThreshold && navigate('/select-view');}
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };    


    return (
        <div className="container">
            <div className="card">
                <form className="project-form" onSubmit={handleSubmit}>
                    <h2>Project type</h2>
                    <p>Don’t panic — You can also customize this type in settings</p>

                    {/* <div className="tab-buttons">
                        <button type="button" className="active">Time & Materials</button>
                        <button type="button">Fixed Fee</button>
                        <button type="button">Non-Billable</button>
                    </div> */}

                    <div className="tabs-container">
                        <div className="tabs">
                            <button
                                className={activeTab === 'Time & Materials' ? 'active' : ''}
                                onClick={() => handleTabClick('Time & Materials')}
                            >
                                Time & Materials
                            </button>
                            <button
                                className={activeTab === 'Fixed Fee' ? 'active' : ''}
                                onClick={() => handleTabClick('Fixed Fee')}
                            >
                                Fixed Fee
                            </button>
                            <button
                                className={activeTab === 'Non-Billable' ? 'active' : ''}
                                onClick={() => handleTabClick('Non-Billable')}
                            >
                                Non-Billable
                            </button>
                        </div>
                    </div>

                    <label>
                        <p style={{ fontWeight: 'bold', marginBottom: '-2px', textAlign: 'left' }}>Hourly</p>
                        <p style={{ textAlign: 'left' }}>We need hourly rates to track your project's billable amount.</p>
                        <div className="client-select">
                            <select
                                value={projectHourlyRate}
                                onChange={(e) => setProjectHourlyRate(e.target.value)}
                            >
                                <option value="">Project Hourly Rate</option>
                                <option value="780000">780000</option>
                                <option value="980000">980000</option>
                                <option value="365470">365470</option>
                            </select>
                            <input
                                type="text"
                                value={projectHourlyRate}
                                onChange={(e) => setProjectHourlyRate(e.target.value)}
                                placeholder="₹ 12,678.00"
                                required
                            />
                        </div>
                    </label>

                    <label>
                        <p style={{ fontWeight: 'bold', marginBottom: '-2px', textAlign: 'left' }}>Budget</p>
                        <p style={{ textAlign: 'left' }}>We need hourly rates to track your project's billable amount.</p>

                        <select
                            value={budgetHours}
                            onChange={(e) => setBudgetHours(e.target.value)}
                        >
                            <option value="">Hours per Person</option>
                            <option value="Hours 1">60</option>
                            <option value="Hours 2">90</option>
                        </select>
                    </label>

                    {/* <div className="checkbox-group"> */}
                    <div style={{ flexDirection: 'row', alignSelf: 'flex-start', marginBottom: '5px' }}>
                        <input
                            type="checkbox"
                            checked={sendEmailAlerts1}
                            onChange={(e) => setSendEmailAlerts1(e.target.checked)}
                        />
                        <label>Budget resets every month </label>
                    </div>

                    <div style={{ flexDirection: 'row', alignSelf: 'flex-start', marginBottom: '15px' }}>
                        <input
                            type="checkbox"
                            checked={sendEmailAlerts2}
                            onChange={(e) => setSendEmailAlerts2(e.target.checked)}
                        />
                        <label>
                            Send email alerts if project exceeds
                            <input
                                type="text"
                                value={alertThreshold}
                                onChange={(e) => setAlertThreshold(e.target.value)}
                                className="threshold-input"
                                required="true"
                            />
                            % of budget
                        </label>
                    </div>

                    <div className="form-navigation">
                        <button type="button" className="back-button" onClick={() => navigate("/")}>{"< "} Back</button>
                        <button type="submit" className="next-button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectTypeForm;
