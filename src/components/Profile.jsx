import React, { useState } from "react";
import EditMyProfile from "./EditProfile";

const MyProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: "your name",
    job: "your profession",
    hobbies: ["Hobby1", "Hobby2"],
    allergies: ["Allergie1", "Allergie2"],
    dietaryRestrictions: "Vegetarian",
    photo: null,
  });

  const [editing, setEditing] = useState(false);

  const handleProfileEdit = (updatedProfile) => {
    setProfileInfo(updatedProfile);
    setEditing(false);
  };

  return (
    <div>
      <div className="profile-container" id="profile-container">
        <h2>Profil</h2>
        <div className="profile-info">
          <div className="label">Name:</div>
          <div className="profile-text">{profileInfo.name}</div>
        </div>
        <div className="profile-info">
          <div className="label">Profession:</div>
          <div className="profile-text">{profileInfo.job}</div>
        </div>
        <div className="profile-info">
          <div className="label">Hobbies:</div>
          <div className="profile-text">{profileInfo.hobbies.join(", ")}</div>
        </div>
        <div className="profile-info">
          <div className="label">Allergies:</div>
          <div className="profile-text">
            {profileInfo.allergies.join(", ")}
          </div>
        </div>
        <div className="profile-info">
          <div className="label">Dietary Restrictions:</div>
          <div className="profile-text">
            {profileInfo.dietaryRestrictions}
          </div>
        </div>
        {profileInfo.photo && (
          <img
            src={profileInfo.photo}
            alt="Profile"
            className="profile-photo"
          />
        )}
      </div>

      <div className="clear">
        {editing ? (
          <EditMyProfile
            initialProfile={profileInfo}
            updateProfile={handleProfileEdit}
          />
        ) : (
          <button className="edit-button" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
