import Dexie from "dexie";


// define new Database
const db = new Dexie('MyDatabase');
db.version(1).stores({
  myData: 'firstName, lastName, email, allergies, dietaryRestrictions, favoriteDish, photo',
});

//generating ID
const generateUniqueId = () => {
  const randomNumber = Math.floor(100000 + Math.random() * 900000); // Erzeugt eine Zufallszahl zwischen 100000 und 999999
  return randomNumber.toString();
};

//add information to profile
const indexedDBServiceInstance = {
  addProfile: async (firstName, lastName, email, allergies, dietaryRestrictions, favoriteDish) => {
    const id = generateUniqueId();
    return await db.myData.add({ 
      id,
      firstName, 
      lastName, 
      email, 
      allergies, 
      dietaryRestrictions, 
      favoriteDish });
  },
  //getting the profile information
  getAllProfiles: async () => {
    return await db.myData.toArray();
  },
};

export { indexedDBServiceInstance as indexedDBService, generateUniqueId };
