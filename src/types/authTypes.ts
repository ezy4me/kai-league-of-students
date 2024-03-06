export interface AuthResponse {
  token?: string;
}

export interface RegistrationDTO {
  userEmail: string;
  userPassword: string;
}

export interface IUser {
  userId: number;
  userEmail: string;
  userRole: string;
}

export interface LoginDTO extends RegistrationDTO {}
