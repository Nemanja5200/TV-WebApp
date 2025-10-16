import { FC } from "react";
import { MoviesPropsType } from "@/pages/Movies/types/MoviesTypes.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
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
import { DisplayRow } from "@/components";
import { CARDTYPE } from "@/components/Card/consts/CARDTYPE.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";
import { useMovies } from "@/pages/Movies/hooks/useMovies.tsx";
import { IMAGE_POSTER_URL } from "@/constants/constants/Links.ts";
import { NAVBAR } from "@/components/Header/type/NavElements.ts";
import { useFocusManager } from "@/hooks/useFocusManager.tsx";

export const Movies: FC<MoviesPropsType> = ({ focusKey: moviesKey }) => {
  const { upcomingMovies, details, movieInfo, setFocusedId } = useMovies();
  const { scrollingRefHorizontal, HorizontalScroll } = useScrollOnFocus();
  const { ref } = useFocusable({
    focusKey: moviesKey,
  });

  useFocusManager(NAVBAR.MOVIES);
  return (
    <>
      <FocusContext.Provider value={moviesKey}>
        <MoviesPageWrapper ref={ref}>
          <MovieHeroContainer>
            <MovieHeroImg src={IMAGE_POSTER_URL + details?.heroPoster} />
            <MovieHeroSolid />
            <MovieHeroGradient />
          </MovieHeroContainer>
          <DescriptionContainer>
            <DescriptionHeaderContainer>
              {movieInfo?.title}
            </DescriptionHeaderContainer>
            <DescriptionTextContainer>
              {movieInfo?.overview}
            </DescriptionTextContainer>
          </DescriptionContainer>
          <MoviesCardsWrapper ref={scrollingRefHorizontal}>
            {upcomingMovies ? (
              <DisplayRow
                cardType={CARDTYPE.HORIZONTAL}
                data={upcomingMovies}
                focusKey={FOCUSKEY.UPCOMING}
                onFocus={HorizontalScroll}
                onCardFocus={(movieId) => setFocusedId(movieId)}
              />
            ) : null}
          </MoviesCardsWrapper>
        </MoviesPageWrapper>
      </FocusContext.Provider>
    </>
  );
};
