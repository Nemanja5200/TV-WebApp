import { FC } from "react";
import {
  HeaderLogo,
  HeaderWrapper,
  NavElement,
  NavMenuContainer,
} from "@/components/Header/styles/Header.style.ts";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";
import { NAVBAR } from "@/components/Header/contstants/NavElements.ts";

export const Header: FC = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo src={IMAGE_PATHS.LOGO} />
        <NavMenuContainer>
          {Object.entries(NAVBAR).map(([key, label], index) => (
            <NavElement key={key} focused={index === 0}>
              {label.toUpperCase()}
            </NavElement>
          ))}
        </NavMenuContainer>
      </HeaderWrapper>
    </>
  );
};
