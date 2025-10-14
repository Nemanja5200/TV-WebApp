export interface TMDBPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ParsedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface RawMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

export interface RawTVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  popularity: number;
  origin_country: string[];
}

export interface RawDetails {
  adult: boolean;
  backdrop_path: string | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  poster: string | null;
  title: string;
}

export interface Details {
  heroPoster: string;
  title: string;
  overview: string;
  genre: string;
  country: string;
  duration: number;
  release_date: string;
  rating: number;
}

export interface TVShow {
  id: number;
  poster: string | null;
  title: string;
}

export type RawMovieResponse = TMDBPaginatedResponse<RawMovie>;
export type RawTVResponse = TMDBPaginatedResponse<RawTVShow>;
export type RawDetailsResponse = RawDetails;

export type MoviesResponse = ParsedResponse<Movie>;
export type TVShowsResponse = ParsedResponse<TVShow>;
export type DetailsResponse = Details;

export type RawMediaResponse =
  | RawMovieResponse
  | RawTVResponse
  | RawDetailsResponse;
export type ParsedMediaResponse =
  | MoviesResponse
  | TVShowsResponse
  | DetailsResponse;
