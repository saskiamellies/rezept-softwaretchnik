import { indexedDBService } from './indexedDBService';

const saveProfile = async (profile) => {
  await indexedDBService.addProfile(profile);
};

const getProfile = async () => {
  return await indexedDBService.getAllProfiles(); // Änderung hier
};

export { saveProfile, getProfile };
