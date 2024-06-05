import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const ManageProject = () => {
  const [selectedPermission, setSelectedPermission] = useState(localStorage.getItem('selectedPermission') || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPermission) {
      localStorage.setItem('selectedPermission', selectedPermission);
    }
  }, [selectedPermission]);

  const handleNext = () => {
    // Handle the navigation to the next component
    console.log('Next button clicked');
  };

  const handleBack = () => {
    // Handle the navigation to the previous component
    console.log('Back button clicked');
  };

  return (
    <div className="container">
    <div className="card">
      <h2>Who can manage projects</h2>
      <p>Don’t panic — You can also customize this permissions in settings</p>

      <div className="permission-options">
        <div
          className={`permission-option ${selectedPermission === 'everyone' ? 'selected' : ''}`}
          onClick={() => setSelectedPermission('everyone')}
        >
          <div className="icon">👥</div>
          <div className='set-text'>
          <p style={{fontWeight:'bold',marginBottom:'-9px'}}>Everyone</p>
          <p>All users can now to see it, but guests cannot access the projects.</p>
          </div>
        </div>

        <div
          className={`permission-option ${selectedPermission === 'admins' ? 'selected' : ''}`}
          onClick={() => setSelectedPermission('admins')}
        >
          <div className="icon">👨‍💼</div>
          <div className='set-text'>
          <p style={{fontWeight:'bold',marginBottom:'-9px'}}>Only Admin's</p>
          <p>Only admins can manage everything.</p>
          </div>
        </div>

        <div
          className={`permission-option ${selectedPermission === 'specific' ? 'selected' : ''}`}
          onClick={() => setSelectedPermission('specific')}
        >
          <div className="icon">🔒</div>
          <div className='set-text'>
          <p style={{fontWeight:'bold',marginBottom:'-9px'}}>Only to Specific people</p>
          <p>Only some specific people can able to see it.</p>
        </div>
        </div>

      </div>

      <div className="buttons">
        <button className="back-button" onClick={() => navigate("/select-view")}>{'< '} Back</button>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default ManageProject;
