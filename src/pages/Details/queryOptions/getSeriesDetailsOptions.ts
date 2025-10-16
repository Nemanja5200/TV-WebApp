import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getSeriesDetailsOptions = (id: number) => {
  return queryOptions({
    queryKey: ["serise-details", id],
    queryFn: () => tmdbService.getSeriesDetails(id),
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
