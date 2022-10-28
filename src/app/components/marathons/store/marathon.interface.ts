import { Movie } from "../../movies/store/movie.interface";

export interface Marathon {
  id: string;
  title: string;
  description: string;
  movies: Movie[];
  startDate: string;
  endDate: string;
}
