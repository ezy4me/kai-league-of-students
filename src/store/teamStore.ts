import { ITeam, TeamResponse } from '@/types';
import { TeamService } from './../services/teamService';
import { create } from 'zustand';
import { AxiosResponse } from 'axios';

type TeamState = {
  teams: any | null;
  error: any;
};

type TeamActions = {
  getUserTeams: (userId: number) => Promise<AxiosResponse<TeamResponse, any> | undefined>;
  deleteUserTeam: (teamId: number) => Promise<AxiosResponse<TeamResponse, any> | undefined>;
  createUserTeam: (userId: number, dto: ITeam) => Promise<AxiosResponse<TeamResponse, any> | undefined>;
};

const getValueFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const useTeamStore = create<TeamState & TeamActions>((set) => ({
  teams: getValueFromLocalStorage('team'),
  error: null,

  getUserTeams: async (userId) => {
    try {
      const res = await TeamService.getUserTeams(userId);
      if (res.status === 200) {
        localStorage.setItem('teams', JSON.stringify(res.data.teams));

        set({
          teams: res.data.teams,
        });
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('GET ALL TEAMS ERROR:', error);
    }
  },

  createUserTeam: async (userId, dto) => {
    try {
      const res = await TeamService.updateUserTeam(userId, dto);
      if (res.status === 200) {
        //
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('CREATE TEAM ERROR:', error);
    }
  },

  deleteUserTeam: async (teamId) => {
    try {
      const res = await TeamService.deleteUserTeam(teamId);
      if (res.status === 200) {
        //
      } else {
        set({
          error: res,
        });
      }

      return res;
    } catch (error) {
      console.error('DELETE TEAM ERROR:', error);
    }
  },
}));

export default useTeamStore;
