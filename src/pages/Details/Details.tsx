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
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";
import { BUTTON_TYPE } from "@/pages/Details/components/Button/consts/ButtonType.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useDetails } from "@/pages/Details/hooks/useDetails.tsx";

export const Details: FC = () => {
  const { onBackClick } = useDetails();

  const { ref, focusKey } = useFocusable({
    focusKey: FOCUSKEY.DETAILS,
    preferredChildFocusKey: FOCUSKEY.WATCH_NOWBTN,
  });
  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <DetailsPageWrapper ref={ref}>
          <Button
            $width={112}
            $height={64}
            $ImgWidth={31}
            $ImgHeight={39}
            $padding="8px 32px"
            $backgroundColor="#2F2F2F"
            IconIMG={IMAGE_PATHS.BACKICON}
            buttonType={BUTTON_TYPE.BACK}
            $margin="0px 0px 44px 0px"
            focusKey={FOCUSKEY.BACKBTN}
            onClick={onBackClick}
          />
          <DetailsContentContainer>
            <MovieInfoContainer>
              <MovieInfo>Drama</MovieInfo>
              <MovieInfo>98 Minutes</MovieInfo>
              <MovieInfo>US - 1987 - PG - IMDb: 7.7</MovieInfo>
            </MovieInfoContainer>
            <MovieItemsContainer>
              <MovieImage src={IMAGE_PATHS.TESTPOSTER} />
              <DescriptionContainer>
                <MovieHeader>Empire Of The Sun</MovieHeader>
                <MovieDescriptionContainer>
                  Boolean union variant background text vertical rectangle
                  background horizontal. Boolean union variant background text
                  vertical rectangle background horizontal. Pen export mask font
                  image ellipse{" "}
                </MovieDescriptionContainer>
                <MovieInfoContainer $width="698px">
                  <MovieInfo>Director: Enzo G. Castellari</MovieInfo>
                  <MovieInfo>
                    Cast: Enzo G. Castellari, Enzo G. Castellari, Enzo G.
                    Castellari, Enzo G. Castellar
                  </MovieInfo>
                </MovieInfoContainer>
                <Button
                  $width={286}
                  $height={78}
                  $ImgWidth={13}
                  $ImgHeight={4}
                  $padding="27px 55px"
                  $backgroundColor="#2F2F2F"
                  IconIMG={IMAGE_PATHS.WATCHICON}
                  label="WATCH NOW"
                  buttonType={BUTTON_TYPE.WATCH_NOW}
                  focusKey={FOCUSKEY.WATCH_NOWBTN}
                />
              </DescriptionContainer>
            </MovieItemsContainer>
          </DetailsContentContainer>
        </DetailsPageWrapper>
      </FocusContext.Provider>
    </>
  );
};
