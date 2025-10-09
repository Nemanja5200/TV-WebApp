import styled from "styled-components";

export const ChannelCardContainer = styled.div<{ $focused: boolean }>`
  width: 280px;
  height: 136px;
  border-radius: 16px;
  padding: 24px 23px 24px 23px;
  gap: 24px;
  background-color: #181818;
  border: 4px solid ${({ $focused }) => ($focused ? "#ED1C24" : "transparent")};
`;
