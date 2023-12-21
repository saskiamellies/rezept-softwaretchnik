// Annahme: db.myData ist eine Mock-Implementierung der IndexedDB-Datenbank

// Import der Funktionen und der Datenbank-Mock-Implementierung
const { addProfile, getAllProfiles } = indexedDBServiceInstance;
const db = require('./path/to/dbMock');

// Test für addProfile
test('addProfile should add a new profile to the database', async () => {
  // Arrange
  const profileData = { name: 'John Doe', email: 'john@example.com', avatar: 'avatar.png', customFile: 'file.txt' };

  // Act
  await addProfile(profileData.name, profileData.email, profileData.avatar, profileData.customFile);

  // Assert
  const addedProfile = db.myData.data.find(profile => profile.email === profileData.email);
  expect(addedProfile).toEqual(profileData);
});

// Test für getAllProfiles
test('getAllProfiles should return an array of all profiles from the database', async () => {
  // Arrange
  const profilesInDatabase = [
    { name: 'Alice', email: 'alice@example.com', avatar: 'alice.jpg', customFile: 'alice.txt' },
    { name: 'Bob', email: 'bob@example.com', avatar: 'bob.jpg', customFile: 'bob.txt' },
  ];

  // Füge Profile zur Mock-Datenbank hinzu
  db.myData.data = profilesInDatabase;

  // Act
  const retrievedProfiles = await getAllProfiles();

  // Assert
  expect(retrievedProfiles).toEqual(profilesInDatabase);
});

  