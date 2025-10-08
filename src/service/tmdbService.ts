import { api } from "@/api/api.ts";
import { ParseTMDBResponse } from "@/utils/Parser.ts";
import { TMBD_ROUTE } from "@/utils/constants/TMBD.ts";
import {
  MoviesResponse,
  RawMovieResponse,
  RawTVResponse,
  TVShowsResponse,
} from "@/types/TMBDTypes.ts";

export const tmdbService = {
  getNowPlayingMovies: async (page: number = 1): Promise<MoviesResponse> => {
    const response = await api.get<RawMovieResponse>(
      TMBD_ROUTE.NOW_PLAYING_MOVIES,
      {
        params: { page },
      },
    );
    return ParseTMDBResponse(response.data);
  },

  getTrendingMovies: async (
    timeWindow: string = "week",
  ): Promise<MoviesResponse> => {
    const url = `${TMBD_ROUTE.TRENDING_MOVIES}${timeWindow}`;
    const response = await api.get<RawMovieResponse>(url);
    return ParseTMDBResponse(response.data);
  },

  getPopularSeries: async (page: number = 1): Promise<TVShowsResponse> => {
    const response = await api.get<RawTVResponse>(TMBD_ROUTE.POPULAR_SHOWS, {
      params: { page },
    });
    return ParseTMDBResponse(response.data);
  },
};
