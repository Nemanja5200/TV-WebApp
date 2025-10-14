import {
  RawDetailsResponse,
  RawMediaResponse,
  RawMovieResponse,
  RawTVResponse,
} from "@/types/TMBDTypes.ts";

export const isMovieResponse = (
  response: RawMediaResponse,
): response is RawMovieResponse => {
  return (
    "results" in response &&
    response.results.length > 0 &&
    "title" in response.results[0]
  );
};

export const isTVResponse = (
  response: RawMediaResponse,
): response is RawTVResponse => {
  return (
    "results" in response &&
    response.results.length > 0 &&
    "name" in response.results[0]
  );
};

export const isDetailsResponse = (
  response: RawMediaResponse | RawDetailsResponse,
): response is RawDetailsResponse => {
  return (
    !("results" in response) && "genres" in response && "runtime" in response
  );
};
