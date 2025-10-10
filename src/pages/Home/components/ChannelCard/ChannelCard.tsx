import { FC } from "react";
import { ChannelCardContainer } from "@/pages/Home/components/ChannelCard/style/ChannelCard.style.ts";
import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { ChannelCardPropsTypes } from "@/pages/Home/components/ChannelCard/types/ChannelCardTypes.tsx";

export const ChannelCard: FC<ChannelCardPropsTypes> = ({
  focusKey: channelKey,
  onLeftFocusElement,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: channelKey,
    onArrowPress: (direction) => {
      if (direction === "left") {
        {
          setFocus(onLeftFocusElement);
          return false;
        }
      }
      return true;
    },
  });
  return (
    <>
      <ChannelCardContainer ref={ref} $focused={focused}></ChannelCardContainer>
    </>
  );
};
