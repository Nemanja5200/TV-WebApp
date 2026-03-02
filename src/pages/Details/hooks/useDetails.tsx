import { useBackgroundContext } from "@/context/BackgroundContext.tsx";
import { useEffect } from "react";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useLocation, useNavigate, Location } from "react-router-dom";
import { ROUTES } from "@/constants/constants/Routes.ts";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsOptions } from "@/pages/Movies/queryOptions/getMovieDetailsOptions.ts";
import { getSeriesDetailsOptions } from "@/pages/Details/queryOptions/getSeriesDetailsOptions.ts";
import { getMovieCreditsOptions } from "@/pages/Details/queryOptions/getMovieCreditsOptions.ts";
import { getSeriesCreditsOptions } from "@/pages/Details/queryOptions/getSeriesCreditsOptions.ts";

interface DetailsLocationState {
  from?: string;
  focusKey?: string;
  id?: number;
  returnFromDetails?: boolean;
}

export const useDetails = () => {
  const { setBackgroundColor, setBackgroundImg } = useBackgroundContext();
  const location = useLocation() as Location<DetailsLocationState>;
  const navigate = useNavigate();

  const focusKey = location.state?.focusKey;
  const id = location.state?.id;

  const isTVShow = focusKey?.includes(FOCUSKEY.POPULAR_TVSHOWS);

  const { data: seriesDetails } = useQuery({
    ...getSeriesDetailsOptions(id as number),
    enabled: isTVShow && !!id,
  });

  const { data: movieDetails } = useQuery({
    ...getMovieDetailsOptions(id as number),
    enabled: !isTVShow && !!id,
  });

  const { data: movieCredits } = useQuery({
    ...getMovieCreditsOptions(id as number),
    enabled: !isTVShow && !!id,
  });

  const { data: seriesCredits } = useQuery({
    ...getSeriesCreditsOptions(id as number),
    enabled: isTVShow && !!id,
  });

  const detailsData = isTVShow ? seriesDetails : movieDetails;
  const creditsData = isTVShow ? seriesCredits : movieCredits;

  useEffect(() => {
    setBackgroundColor("#151515");
    setBackgroundImg(undefined);
    setFocus(FOCUSKEY.WATCH_NOWBTN);
  }, [setBackgroundColor, setBackgroundImg]);

  const onBackClick = () => {
    const fromPath = location.state?.from;
    // Determine the correct route based on the stored path
    let targetRoute = ROUTES.HOME;
    if (fromPath?.includes("movies")) {
      targetRoute = ROUTES.MOVIES;
    }
    
    navigate(targetRoute, {
      state: {
        focusKey: location.state?.focusKey,
        returnFromDetails: true,
      } as DetailsLocationState,
    });
  };

  return {
    onBackClick,
    focusKey,
    id,
    detailsData,
    isTVShow,
    creditsData,
  };
};
