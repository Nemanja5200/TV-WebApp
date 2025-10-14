import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUpcomingMoviesOptions } from "@/pages/Movies/queryOptions/getUpcomingMoviesOptions.ts";
import { getDetailsOptions } from "@/pages/Movies/queryOptions/getDetailsOptions.ts";
import { useEffect, useState } from "react";

export const useMovies = () => {
  const { data: upcomingMovies } = useQuery(getUpcomingMoviesOptions());
  const [focusedID, setFocusedId] = useState(
    upcomingMovies?.results[0]?.id || 0,
  );
  const { data: details } = useQuery(getDetailsOptions(focusedID));
  const queryClient = useQueryClient();

  const [movieInfo, setMovieInfo] = useState({
    title: details?.title,
    overview: details?.overview,
  });

  useEffect(() => {
    if (details) {
      setMovieInfo({
        title: details.title || "",
        overview: details.overview || "",
      });
    }
  }, [details]);

  useEffect(() => {
    if (upcomingMovies?.results && focusedID) {
      const currentIndex = upcomingMovies.results.findIndex(
        (movie) => movie.id === focusedID,
      );

      if (currentIndex !== -1) {
        const moviesToPrefetch = 3;

        for (let i = 1; i <= moviesToPrefetch; i++) {
          const nextIndex = currentIndex + i;
          if (nextIndex < upcomingMovies.results.length) {
            const nextMovieId = upcomingMovies.results[nextIndex].id;

            queryClient.prefetchQuery(getDetailsOptions(nextMovieId));
          }
        }
      }
    }
  }, [focusedID, upcomingMovies, queryClient]);

  return {
    upcomingMovies,
    details,
    setFocusedId,
    focusedID,
    movieInfo,
  };
};
