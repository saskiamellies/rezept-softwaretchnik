import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AvatarGenerator } from 'random-avatar-generator';


const MyProfile = () => {
  const generator = new AvatarGenerator();
  const initialProfileState = {
    firstName: "",
    lastName: "",
    username: "",
    favoriteDish: "",
    allergies: "",
    dietaryRestrictions: "",
    email: "",
    id: uuidv4(),
    profilePicture: generator.generateRandomAvatar(),
  };

  const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem("user")) || initialProfileState);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidProfile, setIsValidProfile] = useState(!!localStorage.getItem("user"));
  const [isEditMode, setIsEditMode] = useState(!isValidProfile);


  useEffect(() => {
    // WebSocket connection
    const socket = new WebSocket('ws://localhost:3000/ws');

    // Event handler for when the connection is opened
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    // Event handler for receiving messages
    socket.addEventListener('message', (event) => {
      console.log('Received message:', event.data);
    });

    // Event handler for when the connection is closed
    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
    });

    // Event handler for errors
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    // Cleanup function to close the WebSocket connection when the component is unmounted
    return () => {
      socket.close();
    };
  }, []);


  const handleInputText = (value, property) => {
    if (property === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(value));
    }
    setProfileData({ ...profileData, [property]: value.trim() });
  };

  const saveProfile = () => {
    const missingFields = Object.entries(profileData).filter(([key, value]) => !value.trim());

    if (missingFields.length > 0) {
      alert(`Please fill in all fields.`);
      return;
    }
    localStorage.setItem('user', JSON.stringify(profileData))
    setIsValidProfile(true);
    setIsEditMode(false);

    console.log("Profile saved successfully:", profileData);
  };

  const isProfileEmpty = Object.entries(profileData)
    .filter(([key, value]) => key !== "id")
    .every(([key, value]) => !value.trim());
  const buttonLabel = isValidProfile ? (isProfileEmpty ? "Save Profile" : (isEditMode ? "Save Profile" : "Update Profile")) : "Save Profile";

  const deleteProfile = () => {
    localStorage.removeItem('user');
    setProfileData(initialProfileState);
    setIsValidProfile(false);
    setIsEditMode(true);

    console.log("Profile deleted successfully");
  };

  const enterEditMode = () => {
    setIsEditMode(true);
  };


  return (
    <div className="Profile">
      <h3>{isValidProfile ? "Your Profile:" : "Create Your Profile:"}</h3>

      <div className="col">
        <label htmlFor="profileImage">Profile Image:</label>
        <img
          id="profileImage"
          src={profileData.profilePicture}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="col">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => handleInputText(e.target.value, "firstName")}
          value={profileData.firstName}
          className={`form-control ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
        />
      </div>

      <div className="col">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => handleInputText(e.target.value, "lastName")}
          value={profileData.lastName}
          className={`form-control ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
        />
      </div>

      <div className="col">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => handleInputText(e.target.value, "username")}
          value={profileData.username}
          className={`form-control ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
        />
      </div>

      <div className="col">
        <label htmlFor="favoriteDish">Favorite Dish:</label>
        <input
          type="text"
          id="favoriteDish"
          onChange={(e) => handleInputText(e.target.value, "favoriteDish")}
          value={profileData.favoriteDish}
          className={`form-control ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
        />
      </div>

      <div className="col">
        <label htmlFor="allergies">Allergies:</label>
        <input
          type="text"
          id="allergies"
          onChange={(e) => handleInputText(e.target.value, "allergies")}
          value={profileData.allergies}
          className={`form-control ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
        />
      </div>

      <div className="col">
        <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
        <input
          type="text"
          id="dietaryRestrictions"
          onChange={(e) => handleInputText(e.target.value, "dietaryRestrictions")}
          value={profileData.dietaryRestrictions}
          className={`form-control ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
        />
      </div>

      <div className="col">
        <label htmlFor="email">E-Mail:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => handleInputText(e.target.value, "email")}
          value={profileData.email}
          className={`form-control ${!isValidEmail ? "invalid" : ""} ${!isEditMode ? "readonly" : ""}`}
          readOnly={!isEditMode}
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
        {!isEditMode && isValidProfile && <button onClick={enterEditMode}>Update Profile</button>}
        {isEditMode && <button onClick={saveProfile}>{buttonLabel}</button>}
        {isValidProfile && !isEditMode && <button onClick={deleteProfile}>Delete Profile</button>}
      </div>
    </div>
  );
};

export default MyProfile;
