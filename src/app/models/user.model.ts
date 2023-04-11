export interface User {
  _id?: number;
  name: string,
  username: string,
  surname: string,
  email: string,
  password: string,
  yearly?: number,
  genre: string,
  role?: string,
}
