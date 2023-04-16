import { User } from "../models/user.model";

export const USERS: User[] = [
  {
    _id: 1,
    name: "Rocco",
    username:"narium",
    surname: "Costantino",
    email: "rocco@gmail.com",
    password: "netherFun.94",
    yearly: null,
    genre: "Nonfiction",
    role: "admin"
  },
  {
    _id: 2,
    name: "Mario",
    username:"bad_user98",
    surname: "Rossi",
    email: "mario@gmail.com",
    password: "netherFun.94",
    yearly: null,
    genre: "Drama",
    role: "user"
  },
  {
    _id: 3,
    name: "Federico",
    username:"nice_userX",
    surname: "Verdi",
    email: "fede@gmail.com",
    password: "netherFun.94",
    yearly: null,
    genre: "Drama",
    role: "user"
  }
]
