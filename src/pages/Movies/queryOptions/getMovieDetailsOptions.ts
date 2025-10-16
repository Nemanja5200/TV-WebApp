import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getMovieDetailsOptions = (id: number) => {
  return queryOptions({
    queryKey: ["details", id],
    queryFn: () => tmdbService.getMovieDetails(id),
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
