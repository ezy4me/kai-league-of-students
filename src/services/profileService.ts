import { AxiosResponse } from 'axios';
import { IProfile, InstitutesResponse, ProfileResponse } from '@/types';
import { authInstance } from '.';

const GET_PROFILE_ENDPOINT = 'personal/getOneAccount';
const UPDATE_PROFILE_ENDPOINT = 'personal/update';

const GET_PROFILE_INSTITUTES = 'institutes/getAllOrganisation';


export const ProfileService = {
  async getUserProfile(userId: number): Promise<AxiosResponse<ProfileResponse>> {
    try {
      return await authInstance.get<ProfileResponse>(GET_PROFILE_ENDPOINT + '/' + userId);
    } catch (error) {
      return handleProfileError(error);
    }
  },

  async updateUserProfile(userId: number, dto: IProfile): Promise<AxiosResponse<ProfileResponse>> {
    try {
      return await authInstance.put<ProfileResponse>(UPDATE_PROFILE_ENDPOINT + '/' + userId, dto);
    } catch (error) {
      return handleProfileError(error);
    }
  },

  async getAllOrganisation(): Promise<AxiosResponse<any>> {
    try {
      return await authInstance.get<InstitutesResponse>(GET_PROFILE_INSTITUTES);
    } catch (error) {
      return handleProfileError(error);
    }
  },
};

function handleProfileError(error: any): AxiosResponse<ProfileResponse> {
  if (error.response && error.response.data) {
    const responseData = error.response.data;
    console.log(responseData);
    
    return responseData;
  } else {
    return error;
  }
}
