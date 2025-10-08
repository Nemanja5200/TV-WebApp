import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getPopularTVShowsOptions = (page?: number) => {
  return queryOptions({
    queryKey: ["Popular_Shows", page],
    queryFn: () => tmdbService.getPopularSeries(page),
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
