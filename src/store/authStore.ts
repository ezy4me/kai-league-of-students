import { AuthResponse, IUser, LoginDTO, RegistrationDTO } from '@/types';
import { AuthService } from './../services/authService';
import { create } from 'zustand';
import { AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';

type AuthState = {
  accessToken: string | null;
  user: IUser | null;
  error: any;
};

type AuthActions = {
  onLogin: (dto: LoginDTO) => Promise<AxiosResponse<AuthResponse, any> | undefined>;
  onLogout: () => Promise<void>;
  onRegistration: (dto: RegistrationDTO) => Promise<AxiosResponse<AuthResponse, any> | undefined>;
};

const getValueFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  accessToken: getValueFromLocalStorage('accessToken'),
  user: getValueFromLocalStorage('user'),
  error: null,
  onLogin: async (dto) => {
    try {
      const res = await AuthService.login(dto);
      if (res.status === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.token));

        const user = jwtDecode(res.data.token!) as IUser;
        localStorage.setItem('user', JSON.stringify(user));

        set({
          accessToken: res.data.token,
          user: user,
        });
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('LOGIN ERROR:', error);
    }
  },

  onRegistration: async (dto) => {
    try {
      const res = await AuthService.register(dto);
      if (res.status === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.token));

        const user = jwtDecode(res.data.token!) as IUser;
        localStorage.setItem('user', JSON.stringify(user));

        set({
          accessToken: res.data.token,
          user: user,
        });
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('REGISTRATION ERROR:', error);
    }
  },

  onLogout: async () => {
    localStorage.clear();
    set({
      accessToken: null,
    });
  },
}));

export default useAuthStore;
