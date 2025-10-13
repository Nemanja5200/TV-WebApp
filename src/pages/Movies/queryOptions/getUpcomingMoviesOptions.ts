import {queryOptions} from "@tanstack/react-query";
import {tmdbService} from "@/service/tmdbService.ts";
import {getTime} from "@/utils/getTime.ts";

export const getUpcomingMoviesOptions = (page?: number | 1) => {
    return queryOptions({
        queryKey: ["upcoming-movies", page],
        queryFn: () => tmdbService.getUpcomingMovies(page),
        staleTime: getTime(5),
        gcTime: getTime(5),
    });
};
