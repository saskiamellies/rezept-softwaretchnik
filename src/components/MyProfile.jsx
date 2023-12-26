import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const MyProfile = () => {
  const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem("user")) || {
    firstName: "",
    lastName: "",
    username: "",
    favoriteDish: "",
    allergies: "",
    dietaryRestrictions: "",
    email: "",
    id: uuidv4(),
  });
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputText = (value, property) => {
    if (property === "email") {
      // validation of the email-adress
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(value));
    }
    setProfileData({ ...profileData, [property]: value.trim() });
  };

  const saveProfile = () => {
    // Validation: Check that all fields are filled out
    const missingFields = Object.entries(profileData).filter(([key, value]) => !value.trim());

    if (missingFields.length > 0) {
      alert(`Please fill in all fields.`);
      return;
    }
    localStorage.setItem('user', JSON.stringify(profileData))

    console.log("Profile saved successfully:", profileData);
  };

  return (
    <div className="Profile">
      <h3>Your Profile:</h3>
      <div className="col">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => handleInputText(e.target.value, "firstName")}
          value={profileData.firstName}
          className="form-control"
        />
      </div>

      <div className="col">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => handleInputText(e.target.value, "lastName")}
          value={profileData.lastName}
          className="form-control"
        />
      </div>

      <div className="col">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => handleInputText(e.target.value, "username")}
          value={profileData.username}
          className="form-control"
        />
      </div>

      <div className="col">
        <label htmlFor="favoriteDish">Favorite Dish:</label>
        <input
          type="text"
          id="favoriteDish"
          onChange={(e) => handleInputText(e.target.value, "favoriteDish")}
          value={profileData.favoriteDish}
          className="form-control"
        />
      </div>

      <div className="col">
        <label htmlFor="allergies">Allergies:</label>
        <input
          type="text"
          id="allergies"
          onChange={(e) => handleInputText(e.target.value, "allergies")}
          value={profileData.allergies}
          className="form-control"
        />
      </div>

      <div className="col">
        <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
        <input
          type="text"
          id="dietaryRestrictions"
          onChange={(e) => handleInputText(e.target.value, "dietaryRestrictions")}
          value={profileData.dietaryRestrictions}
          className="form-control"
        />
      </div>

      <div className="col">
        <label htmlFor="email">E-Mail:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => handleInputText(e.target.value, "email")}
          value={profileData.email}
          className={`form-control ${!isValidEmail ? "invalid" : ""}`}
        />
        {!isValidEmail && <p className="error-message">Please enter a valid email address.</p>}
      </div>
      <div className="col">
        <label htmlFor="id">ID:</label>
        <input
          disabled
          type="text"
          id="ID"
          value={profileData.id}
          className="form-control"
        />
      </div>

      <div className="buttons">
        <button onClick={saveProfile}>Save Profile</button>
      </div>
    </div>
  );
};

export default MyProfile;
