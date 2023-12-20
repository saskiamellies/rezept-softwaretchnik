import React, { useState, useEffect } from "react";
import { saveProfile } from "./profileService.js";

const EditProfile = ({ initialProfile = {}, updateProfile }) => {
  const [editedProfile, setEditedProfile] = useState(initialProfile || {});
  const [updatedProfile, setUpdatedProfile] = useState(initialProfile || {});

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || initialProfile;
    if (JSON.stringify(storedProfile) !== JSON.stringify(editedProfile)) {
      localStorage.setItem("userProfile", JSON.stringify(editedProfile));
    }
    setEditedProfile(storedProfile);
  }, [initialProfile, editedProfile]);

  const handleSaveProfile = async (profile) => {
    try {
      await saveProfile(profile);
      localStorage.setItem("userProfile", JSON.stringify(profile));
      setEditedProfile(profile);
    } catch (error) {
      console.error("Failed to save profile:", error);
    }
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileValue = event.target.result;
        if (editedProfile[name] !== fileValue) {
          localStorage.removeItem("userProfile");
        }
        setEditedProfile((prevProfile) => ({
          ...prevProfile,
          [name]: fileValue,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      const updatedProfile = {
        ...editedProfile,
        [name]: value,
      };
      setUpdatedProfile(updatedProfile);
      setEditedProfile(updatedProfile);
    }

    handleSaveProfile(updatedProfile);
  };

  const handleDeletePhoto = () => {
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      photo: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfile = {
      ...editedProfile,
      hobbies: typeof editedProfile.hobbies === "string" ? editedProfile.hobbies.split(", ") : [],
      allergies: typeof editedProfile.allergies === "string" ? editedProfile.allergies.split(", ") : [],
    };

    handleSaveProfile(updatedProfile);
    updateProfile(updatedProfile);
  };


  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>
      <div className="input-group">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={editedProfile.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={editedProfile.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          E-Mail:
          <input
            type="text"
            name="email"
            value={editedProfile.email}
            onChange={handleChange}
          />
        </label>

      </div>
      <div className="input-group">
        <label>
          Allergies:
          <input
            type="text"
            name="allergies"
            value={editedProfile.allergies}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Dietary Restrictions:
          <input
            type="text"
            name="dietaryRestrictions"
            value={editedProfile.dietaryRestrictions}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Favorite Dish:
          <input
            type="text"
            name="favoriteDish"
            value={editedProfile.favoriteDish}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        {editedProfile.photo && (
          <button type="button" onClick={handleDeletePhoto}>
            Delete Photo
          </button>
        )}
      </div>
      <div className="image-preview">
        {editedProfile.photo && (
          <img
            src={editedProfile.photo}
            alt="Profile"
            style={{ maxWidth: "200px", maxHeight: "200px", marginBottom: "10px" }}
          />
        )}
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfile;
