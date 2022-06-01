import { Book, UpdateBookDTO } from './Book';

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
}

export interface UpdateUserBooksDTO {
  books: UserBookDTO[];
}

export interface UpdateUserBooksActionProps {
  body: UpdateUserBooksDTO;
}
