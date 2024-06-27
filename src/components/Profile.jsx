// src/Profile.js
import React from 'react';
import './Profile.css';
import profileImage from './pf.png'; // Ensure you have a local profile image

const Profile = () => {
    return (
        <div className='parent'>
            <div className="profile-container">
                <div className="profile-header"></div>
                <div className="profile-picture">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h2>Sooraj <span className="age">22</span></h2>
                    <p>Patna</p>
                </div>
                <div className="profile-stats">
                    <div className="stat">
                        <strong>80K</strong>
                        <span>Followers</span>
                    </div>
                    <div className="stat">
                        <strong>803K</strong>
                        <span>Likes</span>
                    </div>
                    <div className="stat">
                        <strong>1.4K</strong>
                        <span>Photos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
