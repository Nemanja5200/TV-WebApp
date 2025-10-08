import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMoviesOptions } from "@/pages/Home/queryOptions/getNowPlayingMoviesOptions.ts";
import { getPopularMoviesOptions } from "@/pages/Home/queryOptions/getPopularMoviesOptions.ts";

export const useHome = () => {
  const { data: nowPlayingMovies } = useQuery(getNowPlayingMoviesOptions());
  const { data: popularMovies } = useQuery(getPopularMoviesOptions());

  return {
    nowPlayingMovies,
    popularMovies,
  };
};
