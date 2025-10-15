import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUpcomingMoviesOptions } from "@/pages/Movies/queryOptions/getUpcomingMoviesOptions.ts";
import { getDetailsOptions } from "@/pages/Movies/queryOptions/getDetailsOptions.ts";
import { useEffect, useState } from "react";
import { useBackgroundContext } from "@/context/BackgroundContext.tsx";

export const useMovies = () => {
  const { setBackgroundColor, setBackgroundImg } = useBackgroundContext();
  useEffect(() => {
    setBackgroundColor("#151515");
    setBackgroundImg(undefined);
  }, [setBackgroundColor, setBackgroundImg]);

  const { data: upcomingMovies } = useQuery(getUpcomingMoviesOptions());

  const initialId = upcomingMovies?.results[0]?.id;
  const [focusedID, setFocusedId] = useState<number | undefined>(initialId);

  useEffect(() => {
    if (initialId && !focusedID) {
      setFocusedId(initialId);
    }
  }, [initialId, focusedID]);
  const { data: details } = useQuery({
    ...getDetailsOptions(focusedID!),
    enabled: !!focusedID,
  });
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
