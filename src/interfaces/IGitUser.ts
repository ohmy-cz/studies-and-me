import { IUser } from "./IUser";

// https://docs.github.com/en/rest/reference/users
export interface IGitUser extends IUser {
  login: string,
  id: number,
  email: string | null
}