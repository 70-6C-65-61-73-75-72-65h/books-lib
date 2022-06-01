import { Book, UpdateBookDTO } from './Book';
import { Genre } from './Genre';
import { Nullable } from './globalTypes';

export interface User {
  email: string;
  password: string;
}

export interface UpdateUserDTO extends User {}

export interface UpdateUserActionProps {
  body: UpdateUserDTO;
}

export interface UserInitialState {
  email: string;
  password: string;
}

export interface UserBooks {
  books: Book[];
}

export interface UserBookDTO extends UpdateBookDTO {
  id: number;
  // name: string;
  // rate: number;
  // year: string;
  // description: string;
  // directorid: Nullable<number>;
  // genres: Genre[];
}

export interface UpdateUserBooksDTO {
  books: UserBookDTO[];
}

export interface UpdateUserBooksActionProps {
  body: UpdateUserBooksDTO;
}
