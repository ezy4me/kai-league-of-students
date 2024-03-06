import { IInstitute } from './../types/profileTypes';
import { IProfile, ProfileResponse } from '@/types';
import { ProfileService } from './../services/profileService';
import { create } from 'zustand';
import { AxiosResponse } from 'axios';

type ProfileState = {
  profile: IProfile | null;
  institutes: IInstitute[] | null;
  error: any;
};

type ProfileActions = {
  getUserProfile: (userId: number) => Promise<AxiosResponse<ProfileResponse, any> | undefined>;
  updateUserProfile: (userId: number, dto: IProfile) => Promise<AxiosResponse<ProfileResponse, any> | undefined>;
  getAllOrganisation: () => Promise<AxiosResponse<any> | undefined>;
};

const getValueFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const useProfileStore = create<ProfileState & ProfileActions>((set) => ({
  profile: getValueFromLocalStorage('profile'),
  institutes: null,
  error: null,

  getUserProfile: async (userId) => {
    try {
      const res = await ProfileService.getUserProfile(userId);
      if (res.status === 200) {
        localStorage.setItem('profile', JSON.stringify(res.data.candidate));

        set({
          profile: res.data.candidate,
        });
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('GET PROFILE ERROR:', error);
    }
  },

  updateUserProfile: async (userId, dto) => {
    try {
      const res = await ProfileService.updateUserProfile(userId, dto);
      if (res.status === 200) {
        localStorage.setItem('profile', JSON.stringify(res.data.candidate));

        set({
          profile: res.data.candidate,
        });
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('GET PROFILE ERROR:', error);
    }
  },

  getAllOrganisation: async () => {
    try {
      const res = await ProfileService.getAllOrganisation();
      if (res.status === 200) {
        localStorage.setItem('institutes', JSON.stringify(res.data.candidate));

        set({
          institutes: res.data.candidate,
        });
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('GET PROFILE ORGANISATIONS ERROR:', error);
    }
  },
}));

export default useProfileStore;
