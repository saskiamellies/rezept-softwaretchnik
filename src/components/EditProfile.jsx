import React, { useState, useEffect } from "react";
import { saveProfile } from "./profileService.js";


const EditProfile = ({ initialProfile, updateProfile }) => {
    const [editedProfile, setEditedProfile] = useState(initialProfile || {});
  
    useEffect(() => {
      const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || initialProfile;
      setEditedProfile(storedProfile);
    }, [initialProfile]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && editedProfile.photo) {
      localStorage.removeItem("userProfile");
    }

    if (type === "file") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileValue = event.target.result;
        setEditedProfile((prevProfile) => ({
          ...prevProfile,
          [name]: fileValue,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setEditedProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfile = {
      ...editedProfile,
      hobbies: typeof editedProfile.hobbies === "string" ? editedProfile.hobbies.split(", ") : [],
      allergies: typeof editedProfile.allergies === "string" ? editedProfile.allergies.split(", ") : [],
    };

    try {
        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
        await saveProfile(updatedProfile);
  
        updateProfile(updatedProfile);
      } catch (error) {
        console.error("Failed to save profile:", error);
      }
    };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>
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
      {/* Weitere Input-Felder hier */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfile;
