import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMoviesOptions } from "@/pages/Home/queryOptions/getNowPlayingMoviesOptions.ts";
import { getTrendingMoviesOptions } from "@/pages/Home/queryOptions/getTrendingMoviesOptions.ts";
import { getPopularTVShowsOptions } from "@/pages/Home/queryOptions/getPopularTVShowsOptions.ts";
import { useBackgroundContext } from "@/context/BackgroundContext.tsx";
import { useEffect } from "react";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";

export const useHome = () => {
  const { setBackgroundImg } = useBackgroundContext();
  useEffect(() => {
    setBackgroundImg(IMAGE_PATHS.TV_BACKGROUND);
  }, [setBackgroundImg]);

  const { data: nowPlayingMovies } = useQuery(getNowPlayingMoviesOptions());
  const { data: trendingMovies } = useQuery(getTrendingMoviesOptions());
  const { data: popularTvShows } = useQuery(getPopularTVShowsOptions());

  return {
    nowPlayingMovies,
    trendingMovies,
    popularTvShows,
  };
};
