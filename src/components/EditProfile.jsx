import React, { useState, useEffect } from "react";
import { saveProfile } from "./profileService.js";


const EditProfile = ({ initialProfile, updateProfile }) => {
    const [editedProfile, setEditedProfile] = useState(initialProfile || {});
  
    useEffect(() => {
      const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || initialProfile;
      setEditedProfile(storedProfile);
    }, [initialProfile]);

    const handleChange = async (e) => {
        const { name, value, type, files } = e.target;
      
        if (type === "file" && editedProfile.photo) {
          localStorage.removeItem("userProfile");
        }
      
        if (type === "file" && files && files.length > 0) {
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
          const updatedProfile = {
            ...editedProfile,
            [name]: value,
          };
      
          try {
            await saveProfile(updatedProfile);
          } catch (error) {
            console.error("Failed to save profile to IndexedDB:", error);
          }
      
          localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
          setEditedProfile(updatedProfile);
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
        localStorage.clear(); // Hier wird der LocalStorage geleert
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
              Name:
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Profession:
              <input
                type="text"
                name="job"
                value={editedProfile.job}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Hobbies:
              <input
                type="text"
                name="hobbies"
                value={editedProfile.hobbies}
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
          <button type="submit">Save Changes</button>
        </form>
      );
      
            }
            export default EditProfile;
