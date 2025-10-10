import { FC, useEffect } from "react";
import { MoviesPropsType } from "@/pages/Movies/types/MoviesTypes.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useBackgroundContext } from "@/context/BackgroundContext.tsx";
import {
  DescripiontHeaderContaienr,
  DescriptionContainer,
  DescriptionHeaderContainer,
  DescriptionTextContainer,
  MovieHeroContainer,
  MovieHeroGradient,
  MovieHeroImg,
  MovieHeroSolid,
  MoviesPageWrapper,
} from "@/pages/Movies/styles/Movies.style.ts";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";

export const Movies: FC<MoviesPropsType> = ({ focusKey: moviesKey }) => {
  const { setBackgroundColor, setBackgroundImg } = useBackgroundContext();
  useEffect(() => {
    setBackgroundColor("#151515");
    setBackgroundImg(undefined);
  }, [setBackgroundColor, setBackgroundImg]);

  const {} = useFocusable({
    focusKey: moviesKey,
    isFocusBoundary: true,
  });
  return (
    <>
      <MoviesPageWrapper>
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
      </MoviesPageWrapper>
    </>
  );
};
