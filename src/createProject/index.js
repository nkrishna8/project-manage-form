
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles.css'
import { useNavigate } from 'react-router-dom';


const CreateProject = () => {
    const [projectName, setProjectName] = useState('');
    const [client, setClient] = useState('');
    const [newClient, setNewClient] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [notes, setNotes] = useState('');

    const navigate = useNavigate();


    // Load data from local storage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setProjectName(savedData.projectName);
            setClient(savedData.client);
            setNewClient(savedData.newClient);
            setStartDate(savedData.startDate);
            setEndDate(savedData.endDate);
            setNotes(savedData.notes);
        }
    }, []);

    const handleNext = () => {
        const formData = {
            projectName,
            client,
            newClient,
            startDate,
            endDate,
            notes,
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        // Move to the next component or perform the desired action
        console.log('Form data saved to local storage',formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNext();
        {projectName && (client||newClient ) && startDate && endDate  && navigate('/proj-type');}
    };

    return (
        <div className="container">
            <div className="card">
                <form className="project-form" onSubmit={handleSubmit}>
                    <h2>Create a Project</h2>

                    <b><label>
                        Project name
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Enter project name here"
                            required="true"
                        />
                    </label></b>

                    <b><label>
                        Client
                        <div className="client-select">
                            <select
                                value={client}
                                onChange={(e) => setClient(e.target.value)}
                            >
                                <option value="">Select a client</option>
                                <option value="Client 1">ABC</option>
                                <option value="Client 2">XYZ</option>
                                <option value="Client 3">PQR</option>
                            </select>
                            <span style={{ margin: '15px 15px', fontWeight: 'normal' }}>Or</span>
                            <button type="button" onClick={() => setClient('New Client')} className='new-client'>
                                + New Client
                            </button>
                        </div>
                    </label> </b>

                    {client === 'New Client' && (
                        <label>
                            New Client
                            <input
                                type="text"
                                value={newClient}
                                onChange={(e) => setNewClient(e.target.value)}
                                placeholder="Enter new client name"
                                required
                            />
                        </label>
                    )}

                    <b><label>
                        Dates
                        <div className="date-inputs">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                            <span>-</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </label></b>

                    <b><label>
                        Notes
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Optional"
                            style={{paddingBottom:'50px'}}
                        />
                    </label></b>

                    <div className="form-navigation">
                        <button type="button" className="back-button">{'<  '}  Back</button>
                        <button type="submit" className="next-button" onClick={handleSubmit}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;