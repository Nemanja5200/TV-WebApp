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
import {
  channels,
  channelToRowMap,
} from "@/pages/Home/components/ChannelsWidget/consts/Channels.ts";

export const ChannelsWidget: FC<ChannelWidgetPropsTypes> = ({
  focusKey: widgetKey,
}) => {
  const { ref } = useFocusable({
    focusKey: widgetKey,
    saveLastFocusedChild: false,
    isFocusBoundary: false,
  });
  return (
    <>
      <FocusContext.Provider value={widgetKey}>
        <ChannelsWidgetContainer ref={ref}>
          <ChannelsWidgetHeaderContainer>
            <ChannelsWidgetHeader>Top 5 Channels</ChannelsWidgetHeader>
          </ChannelsWidgetHeaderContainer>
          {channels.map((channelName) => (
            <ChannelCard
              key={channelName}
              focusKey={channelName}
              onLeftFocusElement={channelToRowMap[channelName]}
            />
          ))}
        </ChannelsWidgetContainer>
      </FocusContext.Provider>
    </>
  );
};
