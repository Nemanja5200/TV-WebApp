import { FC } from "react";
import { ChannelCardContainer } from "@/pages/Home/components/ChannelCard/style/ChannelCard.style.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ChannelWidgetPropsTypes } from "@/pages/Home/components/ChannelsWidget/types/ChannelWidgetTypes.ts";

export const ChannelCard: FC<ChannelWidgetPropsTypes> = ({
  focusKey: channelKey,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: channelKey,
  });
  return (
    <>
      <ChannelCardContainer ref={ref} $focused={focused}></ChannelCardContainer>
    </>
  );
};
