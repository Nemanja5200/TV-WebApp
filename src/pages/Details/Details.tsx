import { FC } from "react";
import {
  DescriptionContainer,
  DetailsContentContainer,
  DetailsPageWrapper,
  MovieDescriptionContainer,
  MovieHeader,
  MovieImage,
  MovieInfo,
  MovieInfoContainer,
  MovieItemsContainer,
} from "@/pages/Details/style/Details.style.ts";
import { Button } from "@/pages/Details/components";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useDetails } from "@/pages/Details/hooks/useDetails.tsx";
import { IMAGE_POSTER_URL } from "@/constants/constants/Links.ts";
import { buttonConfigs } from "@/pages/Details/components/Button/consts/ButtonConfig.ts";

export const Details: FC = () => {
  const { onBackClick, detailsData, creditsData, isTVShow } = useDetails();

  const { ref, focusKey } = useFocusable({
    focusKey: FOCUSKEY.DETAILS,
    preferredChildFocusKey: FOCUSKEY.WATCH_NOWBTN,
  });
  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <DetailsPageWrapper ref={ref}>
          <Button {...buttonConfigs.back} onClick={onBackClick} />
          <DetailsContentContainer>
            <MovieInfoContainer>
              <MovieInfo>{detailsData?.genre}</MovieInfo>
              <MovieInfo>
                {detailsData?.duration} {isTVShow ? "Seasons" : "Minutes"}
              </MovieInfo>
              <MovieInfo>
                {detailsData?.country} - {detailsData?.release_date.slice(0, 4)}{" "}
                - PG - IMDb: {Number(detailsData?.rating).toFixed(2)}
              </MovieInfo>
            </MovieInfoContainer>
            <MovieItemsContainer>
              <MovieImage src={IMAGE_POSTER_URL + detailsData?.poster} />
              <DescriptionContainer>
                <MovieHeader>{detailsData?.title}</MovieHeader>
                <MovieDescriptionContainer>
                  {detailsData?.overview}
                </MovieDescriptionContainer>
                <MovieInfoContainer $width="698px">
                  <MovieInfo>
                    Director: {creditsData?.director || "Unknown"}
                  </MovieInfo>
                  <MovieInfo>
                    Cast:{" "}
                    {creditsData?.cast
                      .slice(0, 4)
                      .map((member) => member.name)
                      .join(", ") || "No cast information"}
                  </MovieInfo>
                </MovieInfoContainer>
                <Button {...buttonConfigs.watch_now} />
              </DescriptionContainer>
            </MovieItemsContainer>
          </DetailsContentContainer>
        </DetailsPageWrapper>
      </FocusContext.Provider>
    </>
  );
};
