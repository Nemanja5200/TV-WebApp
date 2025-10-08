import styled from "styled-components";

export const CardContainer = styled.div<{ focused: boolean }>`
  min-width: 252px;
  min-height: 359px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --text-color: ${({ focused }) => (focused ? "#FFFFFF" : "#ffffff99")};
  --is-focused: ${({ focused }) => (focused ? 1 : 0)};
`;

export const CardPoster = styled.img`
  width: 229px;
  height: 300px;
  border-radius: 6px;
  border: calc(var(--is-focused) * 6px) solid #ed1c24;
`;

export const CardTitleWrapper = styled.div`
  width: 229px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 100%;
  color: var(--text-color, #ffffff99);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;
