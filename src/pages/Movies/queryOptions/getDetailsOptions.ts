import { queryOptions } from "@tanstack/react-query";
import { tmdbService } from "@/service/tmdbService.ts";
import { getTime } from "@/utils/getTime.ts";

export const getDetailsOptions = (id: number) => {
  return queryOptions({
    queryKey: ["details", id],
    queryFn: () => tmdbService.getDetails(id),
    enabled: !!id,
    staleTime: getTime(5),
    gcTime: getTime(5),
  });
};
