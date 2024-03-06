import { AxiosResponse } from 'axios';
import { ITeam, TeamResponse } from '@/types';
import { authInstance, formDataInstance } from '.';

const CREATE_TEAM_ENDPOINT = 'team/createTeam';
const GET_TEAMS_ENDPOINT = 'team/getAllTeam';
const DELETE_TEAMS_ENDPOINT = 'team/deleteTeam';
export const TeamService = {
  async getUserTeams(userId: number): Promise<AxiosResponse<TeamResponse>> {
    try {
      return await authInstance.get<TeamResponse>(GET_TEAMS_ENDPOINT + '/' + userId);
    } catch (error) {
      console.log(error);

      return handleTeamError(error);
    }
  },

  async updateUserTeam(userId: number, dto: ITeam): Promise<AxiosResponse<TeamResponse>> {
    try {
      return await formDataInstance.post<TeamResponse>(CREATE_TEAM_ENDPOINT + '/' + userId, dto);
    } catch (error) {
      console.log(error);

      return handleTeamError(error);
    }
  },

  async deleteUserTeam(teamId: number): Promise<AxiosResponse<TeamResponse>> {
    try {
      return await authInstance.delete<TeamResponse>(DELETE_TEAMS_ENDPOINT + '/' + teamId);
    } catch (error) {
      console.log(error);

      return handleTeamError(error);
    }
  },
};

function handleTeamError(error: any): AxiosResponse<TeamResponse> {
  if (error.response && error.response.data) {
    const responseData = error.response.data;
    console.log(responseData);

    return responseData;
  } else {
    return error;
  }
}
