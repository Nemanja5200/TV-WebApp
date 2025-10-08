import {
  Movie,
  MoviesResponse,
  ParsedMediaResponse,
  RawMediaResponse,
  RawMovie,
  RawMovieResponse,
  RawTVResponse,
  RawTVShow,
  TVShow,
  TVShowsResponse,
} from "@/types/TMBDTypes.ts";

export const ParseTMDBResponse = <T extends RawMediaResponse>(
  rawResponse: T,
): ParsedMediaResponse => {
  const isMovieResponse = (
    response: RawMediaResponse,
  ): response is RawMovieResponse => {
    return response.results.length > 0 && "title" in response.results[0];
  };

  if (isMovieResponse(rawResponse)) {
    return {
      page: rawResponse.page,
      total_pages: rawResponse.total_pages,
      total_results: rawResponse.total_results,
      results: rawResponse.results.map(ParseMovie),
    } as MoviesResponse;
  }

  return {
    page: rawResponse.page,
    total_pages: rawResponse.total_pages,
    total_results: rawResponse.total_results,
    results: (rawResponse as RawTVResponse).results.map(ParseTVShow),
  } as TVShowsResponse;
};

const ParseMovie = (rawMovie: RawMovie): Movie => ({
  id: rawMovie.id,
  title: rawMovie.title,
  poster: rawMovie.poster_path,
});

const ParseTVShow = (rawTVShow: RawTVShow): TVShow => ({
  id: rawTVShow.id,
  title: rawTVShow.name,
  poster: rawTVShow.poster_path,
});
