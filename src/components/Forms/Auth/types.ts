export interface AuthInputs {
  email: string;
  password: string;
}

export enum AuthType {
  signIn,
  signUp,
}
