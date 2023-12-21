import React, { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import { getProfile } from './profileService';
import { generateUniqueId } from './indexedDBService';


const MyProfile = () => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: 'your first name',
    lastName: 'your last name',
    email: 'your.email@example.com',
    id: null,
    allergies: ['milk.honey'],
    dietaryRestrictions: 'none',
    favoriteDish: 'Favorite Dish',
    photo: null,
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [editing, setEditing] = useState(false);

  const handleProfileEdit = async (updatedProfile) => {
    if (isEmailValid) {
      setIsEmailValid(true);
      EditProfile(updatedProfile);
      setEditing(false);
    } else {
      setIsEmailValid(false);
      alert('Das E-Mail-Format ist inkorrekt. Bitte überprüfe deine Eingabe.');
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profiles = await getProfile();
        if (profiles.length > 0) {
          setProfileInfo(profiles[0]);
        }
      } catch (error) {
        console.error('Failed to fetch profile from IndexedDB:', error);
      }
    };

    const generateAndSetId = () => {
      const newId = generateUniqueId();
      setProfileInfo((prevProfile) => ({
        ...prevProfile,
        id: newId,
      }));
    };

    if (!profileInfo.id) {
      generateAndSetId();
    }

    fetchProfile();
  }, [profileInfo.id]);


  return (
    <div>
      <div className="profile-container" id="profile-container">
        <h2>Profil</h2>
        <div className="profile-info">
          <div className="label">First Name:</div>
          <div className="profile-text">{profileInfo.firstName}</div>
        </div>
        <div className="profile-info">
          <div className="label">Last Name:</div>
          <div className="profile-text">{profileInfo.lastName}</div>
        </div>
        <div className="profile-info">
          <div className="label">E-Mail:</div>
          {isEmailValid ? (
            <div className="profile-text">{profileInfo.email}</div>
          ) : (
            <div className="profile-text invalid-email">Ungültige E-Mail-Adresse</div>
          )}
        </div>
        <div className="profile-info">
          <div className="label">ID:</div>
          <div className="profile-text">{profileInfo.id}</div>
        </div>
        <div className="profile-info">
          <div className="label">Allergies:</div>
          <div className="profile-text">
            {profileInfo.allergies ? profileInfo.allergies.join(', ') : 'No allergies'}
          </div>
        </div>

        <div className="profile-info">
          <div className="label">Dietary Restrictions:</div>
          <div className="profile-text">
            {profileInfo.dietaryRestrictions}
          </div>
        </div>
        <div className="profile-info">
          <div className="label">Favorite Dish:</div>
          <div className="profile-text">
            {profileInfo.favoriteDish}
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
          <EditProfile
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
