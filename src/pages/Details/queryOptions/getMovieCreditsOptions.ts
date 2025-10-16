import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getMovieCreditsOptions = (id: number) => {
  return queryOptions({
    queryKey: ["movie-credits", id],
    queryFn: () => tmdbService.getMovieCredits(id),
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
