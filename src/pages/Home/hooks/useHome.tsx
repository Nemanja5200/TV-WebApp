import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMoviesOptions } from "@/pages/Home/queryOptions/getNowPlayingMoviesOptions.ts";
import { getTrendingMoviesOptions } from "@/pages/Home/queryOptions/getTrendingMoviesOptions.ts";
import { getPopularTVShowsOptions } from "@/pages/Home/queryOptions/getPopularTVShowsOptions.ts";

export const useHome = () => {
  const { data: nowPlayingMovies } = useQuery(getNowPlayingMoviesOptions());
  const { data: trendingMovies } = useQuery(getTrendingMoviesOptions());
  const { data: popularTvShows } = useQuery(getPopularTVShowsOptions());

  return {
    nowPlayingMovies,
    trendingMovies,
    popularTvShows,
  };
};
