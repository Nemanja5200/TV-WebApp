export interface TVShow {
  id: number;
  poster: string | null;
  title: string;
}

export interface TVShowsResponse {
  results: TVShow[];
  total_pages: number;
  total_results: number;
  page: number;
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

export interface RawTVResponse {
  page: number;
  results: RawTVShow[];
  total_pages: number;
  total_results: number;
}
