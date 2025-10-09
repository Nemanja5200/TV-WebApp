import { FC } from "react";
import { Header } from "@/components";
import {
  CardsContainer,
  HomeContentWrapper,
  RowsContainer,
} from "@/pages/Home/style/Home.style.ts";
import { ROWNAMES } from "@/pages/Home/types/DisplayRowNames.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";
import { ChannelsWidget, DisplayRow } from "@/pages/Home/components";
import { useHome } from "@/pages/Home/hooks/useHome.tsx";

export const Home: FC = () => {
  const { scrollingRefVertical, VerticalScroll } = useScrollOnFocus();
  const { nowPlayingMovies, trendingMovies, popularTvShows } = useHome();
  return (
    <>
      <HomeContentWrapper>
        <CardsContainer>
          <Header focusKey={FOCUSKEY.NAV} onFocus={VerticalScroll} />
          <RowsContainer ref={scrollingRefVertical}>
            {nowPlayingMovies ? (
              <DisplayRow
                header={ROWNAMES.NOW_PLAYING}
                focusKey={FOCUSKEY.NOW_PLAYING}
                onFocus={VerticalScroll}
                data={nowPlayingMovies}
              />
            ) : null}

            {trendingMovies ? (
              <DisplayRow
                header={ROWNAMES.TRENDING_MOVIES}
                focusKey={FOCUSKEY.TRENDING_MOVIES}
                onFocus={VerticalScroll}
                data={trendingMovies}
              />
            ) : null}

            {popularTvShows ? (
              <DisplayRow
                header={ROWNAMES.POPULAR_TVSHOWS}
                focusKey={FOCUSKEY.POPULAR_TVSHOWS}
                onFocus={VerticalScroll}
                data={popularTvShows}
              />
            ) : null}
          </RowsContainer>
        </CardsContainer>
        <ChannelsWidget />
      </HomeContentWrapper>
    </>
  );
};
