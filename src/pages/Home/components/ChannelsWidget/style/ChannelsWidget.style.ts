import styled from "styled-components";

export const ChannelsWidgetContainer = styled.div`
  min-width: 312px;
  min-height: 837px;
  border-radius: 16px;
  padding: 24px 16px 24px 16px;
  gap: 16px;
  margin-top: 32px;
  background-color: #000000;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ChannelsWidgetHeader = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  text-align: center;
`;

export const ChannelsWidgetHeaderContainer = styled.div`
  width: 280px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChannelLogo = styled.img`
  width: 45px;
  height: 45px;
  angle: 0 deg;
  opacity: 1;
`;

export const ChannelName = styled.span`
  width: 245px;
  height: 19px;
  angle: 0 deg;
  opacity: 1;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;
