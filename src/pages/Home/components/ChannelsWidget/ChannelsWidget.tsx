import { FC } from "react";
import {
  ChannelsWidgetContainer,
  ChannelsWidgetHeader,
  ChannelsWidgetHeaderContainer,
} from "@/pages/Home/components/ChannelsWidget/style/ChannelsWidget.style.ts";
import { ChannelCard } from "@/pages/Home/components/ChannelCard/ChannelCard.tsx";
import { ChannelWidgetPropsTypes } from "@/pages/Home/components/ChannelsWidget/types/ChannelWidgetTypes.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { channelToRowMap } from "@/pages/Home/components/ChannelsWidget/consts/Channels.ts";
import {
  CHANNEL_NAMES,
  CHANNEL_PICTURE_LINKS,
  channels,
} from "@/constants/constants/ChannelPictures.ts";

export const ChannelsWidget: FC<ChannelWidgetPropsTypes> = ({
  focusKey: widgetKey,
}) => {
  const { ref } = useFocusable({
    focusKey: widgetKey,
    saveLastFocusedChild: true,
    isFocusBoundary: false,
  });
  return (
    <>
      <FocusContext.Provider value={widgetKey}>
        <ChannelsWidgetContainer ref={ref}>
          <ChannelsWidgetHeaderContainer>
            <ChannelsWidgetHeader>Top 5 Games</ChannelsWidgetHeader>
          </ChannelsWidgetHeaderContainer>
          {channels.map((channelName) => (
            <ChannelCard
              key={channelName}
              focusKey={channelName}
              onLeftFocusElement={channelToRowMap[channelName]}
              channelName={CHANNEL_NAMES[channelName]}
              channelLogo={CHANNEL_PICTURE_LINKS[channelName]}
            />
          ))}
        </ChannelsWidgetContainer>
      </FocusContext.Provider>
    </>
  );
};
