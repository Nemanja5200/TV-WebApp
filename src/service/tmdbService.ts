import { MoviesResponse } from "@/types/Movies.ts";
import { api } from "@/api/api.ts";
import { ParseMoviesResponse } from "@/utils/Parser.ts";
import { TMBD_ROUTE } from "@/utils/constants/TMBD.ts";

export const tmdbService = {
  getNowPlayingMovies: async (page: number = 1): Promise<MoviesResponse> => {
    const response = await api.get(TMBD_ROUTE.NOW_PLAYING, {
      params: { page },
    });
    return ParseMoviesResponse(response.data);
  },

  getTrendingMovies: async (
    timeWindow: string = "week",
  ): Promise<MoviesResponse> => {
    const url = `${TMBD_ROUTE.TRENDING}${timeWindow}`;
    const response = await api.get(url);
    return ParseMoviesResponse(response.data);
  },
};
