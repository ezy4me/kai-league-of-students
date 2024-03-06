export interface ProfileResponse {
  candidate: IProfile;
}

export interface InstitutesResponse {
  candidate: IInstitute[];
}

export interface IProfile {
  id?: number;
  userId: number;
  educationOrganisationId: number;
  educationOrganisation?: {
    fullNameOrganisation: string;
  };
  profileFio: string;
  birthday: string;
  gender: string;
  phoneNumber: string;
  telegramLink: string;
  avatar?: File | string;
}

export interface IInstitute {
  id?: number;
  fullNameOrganisation: string;
  address: string;
}
