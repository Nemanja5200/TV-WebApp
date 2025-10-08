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
    const response = await api.get<RawMovieResponse>(TMBD_ROUTE.NOW_PLAYING, {
      params: { page },
    });
    return ParseTMDBResponse(response.data);
  },

  getTrendingMovies: async (
    timeWindow: string = "week",
  ): Promise<TVShowsResponse> => {
    const url = `${TMBD_ROUTE.TRENDING}${timeWindow}`;
    const response = await api.get<RawTVResponse>(url);
    return ParseTMDBResponse(response.data);
  },
};
