import { FC } from "react";
import { HomeContentWrapper } from "@/pages/Home/style/Home.style.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { CardsDisplay, ChannelsWidget } from "@/pages/Home/components";
import { HomeProps } from "@/pages/Home/types/HomeProps.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useFocusManager } from "@/hooks/useFocusManager.tsx";
import { NAVBAR } from "@/components/Header/type/NavElements.ts";

export const Home: FC<HomeProps> = ({ focusKey: homeKey }) => {
  const { ref } = useFocusable({
    focusKey: homeKey,
    saveLastFocusedChild: false,
  });

  useFocusManager(NAVBAR.HOME);
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
