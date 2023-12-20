import Dexie from "dexie";


// define new Database
const db = new Dexie('MyDatabase');
db.version(1).stores({
  myData: '++id, name, email, avatar, customFile',
});

//add information to profile
const indexedDBServiceInstance = {
  addProfile: async (name, email, avatar, customFile) => {
    return await db.myData.add({ name, email, avatar, customFile });
  },
  //getting the profile information
  getAllProfiles: async () => {
    return await db.myData.toArray();
  },
};

export { indexedDBServiceInstance as indexedDBService };
