import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getNowPlayingMoviesOptions = (page?: number | 1) => {
  return queryOptions({
    queryKey: ["now-playing", page],
    queryFn: () => tmdbService.getNowPlayingMovies(page),

    staleTime: getTime(5),
    gcTime: getTime(5),
    refetchOnWindowFocus: false,
  });
};
