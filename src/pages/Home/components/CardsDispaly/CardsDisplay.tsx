import { FC } from "react";
import { ROWNAMES } from "@/pages/Home/types/DisplayRowNames.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";
import { useHome } from "@/pages/Home/hooks/useHome.tsx";
import {
  CardsContainer,
} from "@/pages/Home/components/CardsDispaly/style/CardsDisplay.style.tsx";
import { CardsDisplayPropsTypes } from "@/pages/Home/components/CardsDispaly/types/CardsDisplayTypes.ts";
import { CHANNELS } from "@/pages/Home/components/ChannelsWidget/consts/Channels.ts";
import {CARDTYPE} from "@/components/Card/consts/CARDTYPE.ts";
import {DisplayRow} from "@/components";

export const CardsDisplay: FC<CardsDisplayPropsTypes> = () => {
  const { scrollingRefVertical, VerticalScroll } = useScrollOnFocus();
  const { nowPlayingMovies, trendingMovies, popularTvShows } = useHome();

  return (
    <>
      <CardsContainer ref={scrollingRefVertical}>
          {nowPlayingMovies ? (
            <DisplayRow
              header={ROWNAMES.NOW_PLAYING}
              focusKey={FOCUSKEY.NOW_PLAYING}
              onFocus={VerticalScroll}
              data={nowPlayingMovies}
              focusElement={CHANNELS.CHANNEL1}
              cardType={CARDTYPE.VERTICAL}
            />
          ) : null}

          {trendingMovies ? (
            <DisplayRow
              header={ROWNAMES.TRENDING_MOVIES}
              focusKey={FOCUSKEY.TRENDING_MOVIES}
              onFocus={VerticalScroll}
              data={trendingMovies}
              focusElement={CHANNELS.CHANNEL3}
              cardType={CARDTYPE.VERTICAL}
            />
          ) : null}

          {popularTvShows ? (
            <DisplayRow
              header={ROWNAMES.POPULAR_TVSHOWS}
              focusKey={FOCUSKEY.POPULAR_TVSHOWS}
              onFocus={VerticalScroll}
              data={popularTvShows}
              focusElement={CHANNELS.CHANNEL5}
              cardType={CARDTYPE.VERTICAL}
            />
          ) : null}
      </CardsContainer>
    </>
  );
};
