import { FC, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { ROUTE_TO_NAV_KEY } from "@/constants/constants/Routes.ts";

export const Header: FC<HeaderProps> = ({ focusKey: focusNav }) => {
  const location = useLocation();
  const initialValue = ROUTE_TO_NAV_KEY[location.pathname] || "HOME";
  const [lastFocusedNavKey, setLastFocusedNavKey] =
    useState<string>(initialValue);

  const { ref } = useFocusable({
    focusKey: focusNav,
    saveLastFocusedChild: true,
    trackChildren: true,
    preferredChildFocusKey: lastFocusedNavKey,
  });

  return (
    <>
      <FocusContext.Provider value={focusNav}>
        <HeaderWrapper>
          <HeaderLogo src={IMAGE_PATHS.LOGO} />
          <NavMenuContainer ref={ref}>
            {Object.entries(NAVBAR).map(([key, label]) => (
              <NavItem
                key={key}
                navKey={key}
                label={label}
                isActiveNav={lastFocusedNavKey === key}
                onNavFocus={() => setLastFocusedNavKey(key)}
              />
            ))}
          </NavMenuContainer>
        </HeaderWrapper>
      </FocusContext.Provider>
    </>
  );
};
