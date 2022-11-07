export interface AuthFormInitialType {
  email: string;
  name?: string;
  password: string;
  confirmPassword?: string;
}

export interface EditFormInitialType {
  description: string;
  nickname: string;
}

export interface UserInfoType {
  description: string;
  nickname: string;
}

export interface PsEditFormInitialType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ErrorType {
  response: {
    data: {
      success: boolean;
      status: number;
      message: string;
    };
  };
}
