import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SelectView = () => {

    const navigate = useNavigate();

    const [selectedView, setSelectedView] = useState(localStorage.getItem('selectedView') || '');

    useEffect(() => {
        if (selectedView) {
            localStorage.setItem('selectedView', selectedView);
        }
    }, [selectedView]);

    const handleNext = () => {
        // Handle the navigation to the next component
        console.log('Next button clicked');   
        {selectedView && navigate('/proj-manage');}

    };

    return (
        // <div className="card">
        //     <h2>Select a view</h2>
        //     <p>You can also customize this view in settings</p>
        //     <div className="view-options">
        //         <div
        //             className={`view-option ${selectedView === 'list' ? 'selected' : ''}`}
        //             onClick={() => setSelectedView('list')}
        //         >
        //             <div className="icon">📃</div>
        //             <p>List</p>
        //         </div>
        //         <div
        //             className={`view-option ${selectedView === 'board' ? 'selected' : ''}`}
        //             onClick={() => setSelectedView('board')}
        //         >
        //             <div className="icon">📋</div>
        //             <p>Board</p>
        //         </div>
        //     </div>
        //     <div className="buttons">
        //         <button className="back-button" onClick={() => navigate("/proj-type")}>Back</button>
        //         <button className="next-button" onClick={handleNext}>Next</button>
        //     </div>
        // </div>

        <div className="container">
        <div className="card">
            <form className="project-form" onSubmit={handleNext}>
                <h2>Select a view</h2>
                <p>You can also customize this views in settings</p>

                <div className="view-options">
                <div
                    className={`view-option ${selectedView === 'list' ? 'selected' : ''}`}
                    onClick={() => setSelectedView('list')}
                >
                    <div className="icon">📃</div>
                    <p>List</p>
                </div>
                <div
                    className={`view-option ${selectedView === 'board' ? 'selected' : ''}`}
                    onClick={() => setSelectedView('board')}
                >
                    <div className="icon">📋</div>
                    <p>Board</p>
                </div>
            </div>
            <br></br><br></br>
                <div className="form-navigation">
                    <button type="button" className="back-button" onClick={() => navigate("/proj-type")}>{"< "} Back</button>
                    <button type="submit" className="next-button">Next</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default SelectView;
