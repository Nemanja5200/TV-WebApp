import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getPopularMoviesOptions = (timeWindow?: string) => {
  return queryOptions({
    queryKey: ["trending", timeWindow],
    queryFn: () => tmdbService.getTrendingMovies(timeWindow),
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
