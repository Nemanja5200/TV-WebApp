import { FC, useEffect } from "react";
import { MoviesPropsType } from "@/pages/Movies/types/MoviesTypes.ts";
import {FocusContext, useFocusable} from "@noriginmedia/norigin-spatial-navigation";
import { useBackgroundContext } from "@/context/BackgroundContext.tsx";
import {
  DescriptionContainer,
  DescriptionHeaderContainer,
  DescriptionTextContainer,
  MovieHeroContainer,
  MovieHeroGradient,
  MovieHeroImg,
  MovieHeroSolid,
  MoviesCardsWrapper,
  MoviesPageWrapper,
} from "@/pages/Movies/styles/Movies.style.ts";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";
import { useData } from "@/hooks/useData.tsx";
import { DisplayRow } from "@/components";
import { CARDTYPE } from "@/components/Card/consts/CARDTYPE.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";

export const Movies: FC<MoviesPropsType> = ({ focusKey: moviesKey }) => {
  const { setBackgroundColor, setBackgroundImg } = useBackgroundContext();
  useEffect(() => {
    setBackgroundColor("#151515");
    setBackgroundImg(undefined);
  }, [setBackgroundColor, setBackgroundImg]);
  const { upcomingMovies } = useData();
  const { scrollingRefHorizontal, HorizontalScroll } = useScrollOnFocus();

  const{ref} = useFocusable({
    focusKey: moviesKey,
  });
  return (
    <>
      <FocusContext.Provider value={moviesKey}>
      <MoviesPageWrapper ref={ref}>
        <MovieHeroContainer>
          <MovieHeroImg src={IMAGE_PATHS.TEST} />
          <MovieHeroSolid />
          <MovieHeroGradient />
        </MovieHeroContainer>
        <DescriptionContainer>
          <DescriptionHeaderContainer>
            Empire Of The Sun
          </DescriptionHeaderContainer>
          <DescriptionTextContainer>
            Boolean union variant background text vertical rectangle background
            horizontal. Boolean union variant background text vertical rectangle
            background horizontal. Pen export mask font image ellipse
          </DescriptionTextContainer>
        </DescriptionContainer>
        <MoviesCardsWrapper ref={scrollingRefHorizontal}>
          {upcomingMovies ? (
            <DisplayRow
              cardType={CARDTYPE.HORIZONTAL}
              data={upcomingMovies}
              focusKey={FOCUSKEY.UPCOMING}
              onFocus={HorizontalScroll}
            />
          ) : null}
        </MoviesCardsWrapper>
      </MoviesPageWrapper>
      </FocusContext.Provider>
    </>
  );
};
