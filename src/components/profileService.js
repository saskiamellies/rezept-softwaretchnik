import { getDB } from './indexedDBService';

const saveProfile = async (profile) => {
  const db = await getDB();
  const tx = db.transaction('userProfiles', 'readwrite');
  const store = tx.objectStore('userProfiles');
  await store.put(profile);
};

const getProfile = async () => {
  const db = await getDB();
  const tx = db.transaction('userProfiles', 'readonly');
  const store = tx.objectStore('userProfiles');
  return await store.getAll();
};

export { saveProfile, getProfile };
