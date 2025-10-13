import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMoviesOptions } from "@/pages/Home/queryOptions/getNowPlayingMoviesOptions.ts";
import { getTrendingMoviesOptions } from "@/pages/Home/queryOptions/getTrendingMoviesOptions.ts";
import { getPopularTVShowsOptions } from "@/pages/Home/queryOptions/getPopularTVShowsOptions.ts";
import {getUpcomingMoviesOptions} from "@/pages/Movies/queryOptions/getUpcomingMoviesOptions.ts";

export const useData = () => {
    const { data: nowPlayingMovies } = useQuery(getNowPlayingMoviesOptions());
    const { data: trendingMovies } = useQuery(getTrendingMoviesOptions());
    const { data: popularTvShows } = useQuery(getPopularTVShowsOptions());
    const { data: upcomingMovies } = useQuery(getUpcomingMoviesOptions());


    return {
        nowPlayingMovies,
        trendingMovies,
        popularTvShows,
        upcomingMovies,
    };
};
