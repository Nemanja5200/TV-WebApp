import { FC, useEffect } from "react";
import {
  HeaderLogo,
  HeaderWrapper,
  NavMenuContainer,
} from "@/components/Header/styles/Header.style.ts";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";
import { NAVBAR } from "@/components/Header/type/NavElements.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { NavItem } from "@/components/Header/components/NavItem.tsx";
import { HeaderProps } from "@/components/Header/type/HeaderProps.ts";

export const Header: FC<HeaderProps> = ({ focusKey: focusNav }) => {
  const { ref, focusSelf } = useFocusable({
    focusKey: focusNav,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <>
      <FocusContext.Provider value={focusNav}>
        <HeaderWrapper>
          <HeaderLogo src={IMAGE_PATHS.LOGO} />
          <NavMenuContainer ref={ref}>
            {Object.entries(NAVBAR).map(([key, label]) => (
              <NavItem key={key} navKey={`${focusNav}-${key}`} label={label} />
            ))}
          </NavMenuContainer>
        </HeaderWrapper>
      </FocusContext.Provider>
    </>
  );
};
