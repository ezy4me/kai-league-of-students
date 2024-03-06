import { AxiosResponse } from 'axios';
import { AuthResponse, LoginDTO, RegistrationDTO } from '@/types';
import { apiInstance } from '.';

const LOGIN_ENDPOINT = 'user/login';
const REGISTRATION_ENDPOINT = 'user/registration';

export const AuthService = {
  async login(dto: LoginDTO): Promise<AxiosResponse<AuthResponse>> {
    try {
      return await apiInstance.post<AuthResponse>(LOGIN_ENDPOINT, { ...dto });
    } catch (error) {
      return handleAuthError(error);
    }
  },

  async register(dto: RegistrationDTO): Promise<AxiosResponse<AuthResponse>> {
    try {
      return await apiInstance.post<AuthResponse>(REGISTRATION_ENDPOINT, { ...dto });
    } catch (error) {
      return handleAuthError(error);
    }
  },
};

function handleAuthError(error: any): AxiosResponse<AuthResponse> {
  if (error.response && error.response.data) {
    const responseData = error.response.data;
    return responseData;
  } else {
    return error;
  }
}
