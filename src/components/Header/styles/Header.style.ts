import styled from "styled-components";
import { NavElemetProps } from "@/components/Header/type/HeaderStyleProps.ts";

export const HeaderWrapper = styled.div`
  width: 1841px;
  height: 60px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 32px;
  gap: 80px;
`;

export const HeaderLogo = styled.img`
  width: 301.8px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavMenuContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 0px 10px 20px;
  gap: 88px;
`;

export const NavElement = styled.div<NavElemetProps>`
  position: relative;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ focused }) => (focused ? "#FFFFFF" : "#575757")};
  line-height: 100%;
  letter-spacing: 6%;
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ focused }) =>
      focused ? "120%" : "0%"}; /* 120% makes it 20% wider */
    height: 4px;
    background-color: #ed1c24;
    transition: width 0.3s ease;
  }
`;
