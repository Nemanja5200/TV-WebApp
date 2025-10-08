import { FC } from "react";
import { Header } from "@/components";
import { HomeContainer, RowsContainer } from "@/pages/Home/style/Home.style.ts";
import { ROWNAMES } from "@/pages/Home/types/DisplayRowNames.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";
import { DisplayRow } from "@/pages/Home/components";
import { useHome } from "@/pages/Home/hooks/useHome.tsx";

export const Home: FC = () => {
  const { scrollingRef, VerticalScroll } = useScrollOnFocus();
  const { nowPlayingMovies, popularMovies } = useHome();

  return (
    <>
      <HomeContainer>
        <Header focusKey={FOCUSKEY.NAV} onFocus={VerticalScroll} />
        <RowsContainer ref={scrollingRef}>
          {nowPlayingMovies ? (
            <DisplayRow
              header={ROWNAMES.NOW_PLAYING}
              focusKey={FOCUSKEY.NOW_PLAYING}
              onFocus={VerticalScroll}
              data={nowPlayingMovies}
            />
          ) : null}

          {popularMovies ? (
            <DisplayRow
              header={ROWNAMES.TRENDING_MOVIES}
              focusKey={FOCUSKEY.TRENDING_MOVIES}
              onFocus={VerticalScroll}
              data={popularMovies}
            />
          ) : null}

          {/*<DisplayRow*/}
          {/*  header={ROWNAMES.SERIES}*/}
          {/*  focusKey={"Test"}*/}
          {/*  onFocus={VerticalScroll}*/}
          {/*/>*/}
        </RowsContainer>
      </HomeContainer>
    </>
  );
};
