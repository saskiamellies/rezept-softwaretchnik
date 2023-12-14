import React, { useState, useEffect } from "react";
import "../style.css";

const EditMyProfile = ({ initialProfile, updateProfile }) => {
  const [editedProfile, setEditedProfile] = useState(initialProfile || {});

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || initialProfile;
    setEditedProfile(storedProfile);
  }, [initialProfile]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file' && editedProfile.photo) {
      localStorage.removeItem("userProfile");
    }

    if (type === 'file') {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      ...editedProfile,
      hobbies: typeof editedProfile.hobbies === 'string' ? editedProfile.hobbies.split(", ") : [],
      allergies: typeof editedProfile.allergies === 'string' ? editedProfile.allergies.split(", ") : [],
    };
  
    // Nur die relevanten Informationen speichern
    const simplifiedProfile = {
      name: updatedProfile.name,
      job: updatedProfile.job,
      photo: updatedProfile.photo,
      hobbies: updatedProfile.hobbies.join(", "),
      allergies: updatedProfile.allergies.join(", "),
      dietaryRestrictions: updatedProfile.dietaryRestrictions,
    };
  
    try {
      // Protokolliere die aktuelle Größe des localStorage
      console.log("localStorage Size Before Clear (bytes):", JSON.stringify(localStorage).length);
  
      localStorage.clear(); // Lösche alle Einträge im localStorage
  
      // Protokolliere die Größe des aktualisierten Profils vor dem Speichern
      console.log("Profile Size Before Save (bytes):", JSON.stringify(simplifiedProfile).length);
  
      localStorage.setItem("userProfile", JSON.stringify(simplifiedProfile));
      updateProfile(updatedProfile);
    } catch (error) {
      console.error("Failed to save profile to local storage:", error);
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
      <div className="input-group">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedProfile.name || ""}
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
            value={editedProfile.job || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Hobbies (comma-separated):
          <input
            type="text"
            name="hobbies"
            value={editedProfile.hobbies || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Allergies (comma-separated):
          <input
            type="text"
            name="allergies"
            value={editedProfile.allergies || ""}
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
            value={editedProfile.dietaryRestrictions || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditMyProfile;
