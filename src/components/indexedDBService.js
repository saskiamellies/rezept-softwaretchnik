import Dexie from "dexie";


// define new Database
const db = new Dexie('MyDatabase');
db.version(1).stores({
  myData: 'firstName, lastName, email, allergies, dietaryRestrictions, favoriteDish, photo',
});

//add information to profile
const indexedDBServiceInstance = {
  addProfile: async (firstName, lastName, email, allergies, dietaryRestrictions, favoriteDish, photo) => {
    return await db.myData.add({ 
      firstName, 
      lastName, 
      email, 
      allergies, 
      dietaryRestrictions, 
      favoriteDish, 
      photo });
  },
  //getting the profile information
  getAllProfiles: async () => {
    return await db.myData.toArray();
  },
};

export { indexedDBServiceInstance as indexedDBService };
