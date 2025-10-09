import { FC } from "react";
import {
  ChannelsWidgetContainer,
  ChannelsWidgetHeader,
  ChannelsWidgetHeaderContainer,
} from "@/pages/Home/components/ChannelsWidget/style/ChannelsWidget.style.ts";
import { ChannelCard } from "@/pages/Home/components/ChannelCard/ChannelCard.tsx";

export const ChannelsWidget: FC = () => {
  return (
    <>
      <ChannelsWidgetContainer>
        <ChannelsWidgetHeaderContainer>
          <ChannelsWidgetHeader>Top 5 Channels</ChannelsWidgetHeader>
        </ChannelsWidgetHeaderContainer>
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
      </ChannelsWidgetContainer>
    </>
  );
};
