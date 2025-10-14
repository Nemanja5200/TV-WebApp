import {
  Details,
  Movie,
  MoviesResponse,
  ParsedMediaResponse,
  RawDetails,
  RawDetailsResponse,
  RawMediaResponse,
  RawMovie,
  RawTVShow,
  TVShow,
  TVShowsResponse,
} from "@/types/TMBDTypes.ts";
import {
  isDetailsResponse,
  isMovieResponse,
  isTVResponse,
} from "@/types/typeGuards.ts";

export const ParseTMDBResponse = <
  T extends RawMediaResponse | RawDetailsResponse,
>(
  rawResponse: T,
): ParsedMediaResponse | Details => {
  if (isDetailsResponse(rawResponse)) {
    return ParseDetails(rawResponse);
  }

  if (isMovieResponse(rawResponse)) {
    return {
      page: rawResponse.page,
      total_pages: rawResponse.total_pages,
      total_results: rawResponse.total_results,
      results: rawResponse.results.map(ParseMovie),
    } as MoviesResponse;
  }

  if (isTVResponse(rawResponse)) {
    return {
      page: rawResponse.page,
      total_pages: rawResponse.total_pages,
      total_results: rawResponse.total_results,
      results: rawResponse.results.map(ParseTVShow),
    } as TVShowsResponse;
  }

  throw new Error("Unknown response type");
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

const ParseDetails = (rawDetails: RawDetails): Details => ({
  title: rawDetails.title,
  genre: rawDetails.genres[0]?.name || "Unknown",
  country: rawDetails.origin_country[0] || "Unknown",
  duration: rawDetails.runtime,
  heroPoster: rawDetails.backdrop_path || "",
  rating: rawDetails.vote_average,
  overview: rawDetails.overview,
  release_date: rawDetails.release_date,
});
