import {
  BookInitialState,
  UpdateBookDTO,
  CreateBookDTO,
  Book,
} from 'src/types/Book';
import { Nullable, SelectorValues } from 'src/types/globalTypes';
import { UserBookDTO } from 'src/types/User';

export const transformBookValuesForSubmit = (
  values: BookInitialState,
  selectedGenres: SelectorValues[],
  selectedDirector: Nullable<SelectorValues>,
): UpdateBookDTO | CreateBookDTO => {
  return {
    name: values.name,
    directorid: selectedDirector
      ? selectedDirector.id
      : values.directorid === ''
      ? null
      : +values.directorid,
    rate: +values.rate,
    year: `${values.year}`,
    description: values.description,
    genres:
      selectedGenres.length > 0
        ? selectedGenres.map((genre) => genre.id)
        : values.genres,
  };
};
export const transformUserBooksValuesForSubmit = (
  values: Book,
): UserBookDTO => {
  return {
    id: values.id,
    name: values.name,
    directorid: values.DirectorId,
    rate: values.rate,
    year: values.year,
    description: values.description,
    genres: values.Genres.map((genre) => genre.id),
  };
};
