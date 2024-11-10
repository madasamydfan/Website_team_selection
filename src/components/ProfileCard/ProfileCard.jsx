// src/components/ProfileCard/ProfileCard.jsx
import React from 'react';
import './ProfileCard.css';
import { VscAccount } from "react-icons/vsc"; // Adjust the path as needed

const ProfileCard = ({ title }) => {
  return (
    <div className="profile-card">
      <VscAccount className="VSC" />
      <div className="profile-footer">
        <button className="explore-button">Explore</button>
        <div className="profile-label">{title}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
