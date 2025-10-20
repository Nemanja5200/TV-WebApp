import styled from "styled-components";

type CardVariant = "horizontal" | "vertical";

export const CardContainer = styled.div<{
  $focused: boolean;
  $variant?: CardVariant;
}>`
  --card-width: ${({ $variant }) =>
    $variant === "vertical" ? "229px" : "403px"};
  --card-height: ${({ $variant }) =>
    $variant === "vertical" ? "359px" : "302px"};
  --poster-width: ${({ $variant }) =>
    $variant === "vertical" ? "229px" : "403px"};
  --poster-height: ${({ $variant }) =>
    $variant === "vertical" ? "300px" : "243px"};

  min-width: var(--card-width);
  min-height: var(--card-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  object-fit: cover;
  align-items: center;
  --text-color: ${({ $focused }) => ($focused ? "#FFFFFF" : "#ffffff99")};
  --is-focused: ${({ $focused }) => ($focused ? 1 : 0)};

  transition: transform 0.3s ease;
  transform: ${({ $focused }) =>
    $focused ? "translateY(-8px)" : "translateY(0)"};
`;

export const CardPoster = styled.img`
  width: var(--poster-width);
  height: var(--poster-height);
  border-radius: 6px;
  border: calc(var(--is-focused) * 6px) solid #ed1c24;
`;

export const CardTitleWrapper = styled.div`
  width: var(--poster-width);
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
