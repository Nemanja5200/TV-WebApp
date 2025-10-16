import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getSeriesCreditsOptions = (id: number) => {
  return queryOptions({
    queryKey: ["series-credits", id],
    queryFn: () => tmdbService.getSeriesCredits(id),
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
