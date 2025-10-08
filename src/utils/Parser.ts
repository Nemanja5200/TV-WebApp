import {
  Movie,
  MoviesResponse,
  RawMovie,
  RawTMDBResponse,
} from "@/types/Movies.ts";

export const ParseMoviesResponse = (
  rawResponse: RawTMDBResponse,
): MoviesResponse => {
  const { page, total_pages, results, total_results } = rawResponse;

  return {
    page,
    total_pages,
    total_results,
    results: results.map((movie) => ParseMovie(movie)),
  };
};

export const ParseMovie = (rawMovie: RawMovie): Movie => {
  const { id, title, poster_path } = rawMovie;
  return {
    id,
    title,
    poster: poster_path,
  };
};
