import { Book } from "./book.model";

export interface Review {
  _id?: number;
  title: string;
  author: string;
  content: string;
  book: string;
  rating?: number;
}
