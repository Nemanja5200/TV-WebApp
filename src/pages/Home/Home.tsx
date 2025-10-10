import { FC, useEffect } from "react";
import { HomeContentWrapper } from "@/pages/Home/style/Home.style.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { CardsDisplay, ChannelsWidget } from "@/pages/Home/components";
import { HomeProps } from "@/pages/Home/types/HomeProps.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useBackgroundContext } from "@/context/BackgroundContext.tsx";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";

export const Home: FC<HomeProps> = ({ focusKey: homeKey }) => {
  const { setBackgroundImg } = useBackgroundContext();
  useEffect(() => {
    setBackgroundImg(IMAGE_PATHS.TV_BACKGROUND);
  }, [setBackgroundImg]);

  const { ref } = useFocusable({
    focusKey: homeKey,
    saveLastFocusedChild: false,
  });
  return (
    <>
      <FocusContext.Provider value={homeKey}>
        <HomeContentWrapper ref={ref}>
          <CardsDisplay focusKey={FOCUSKEY.CARDS} />
          <ChannelsWidget focusKey={FOCUSKEY.CHANNELWIDGET} />
        </HomeContentWrapper>
      </FocusContext.Provider>
    </>
  );
};
