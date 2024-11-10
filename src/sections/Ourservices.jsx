// src/pages/OurServices.jsx
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
// import './OurServices.css';

export default function OurServices() {
  return (
    <>
      <section id="Ourservices">
      <h1 className="section-header">Our Services</h1>
        <div className="services"> 
          <div className="profile-card-container">
            <ProfileCard title="Development" />
            <ProfileCard title="Testing" />
            <ProfileCard title="Hosting" />
          </div>
        </div>
      </section>
    </>
  );
}
