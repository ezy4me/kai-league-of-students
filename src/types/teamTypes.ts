export interface TeamResponse {
    teams: ITeam[];
}

export interface ITeam {
  teamName: string;
  teamAvatar: File;
  fio: string[];
}
