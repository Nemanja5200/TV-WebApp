import { FC } from "react";
import { NavElement } from "@/components/Header/styles/Header.style.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { NavItemProps } from "@/components/Header/type/NavElementsProps.ts";
import { NAVBAR } from "@/components/Header/type/NavElements.ts";
import { useNavFocus } from "@/components/Header/hooks/useNavFocus.tsx";

export const NavItem: FC<NavItemProps> = ({
  label,
  navKey,
  isActiveNav,
  onNavFocus,
}) => {
  const { homeNav, moviesNav } = useNavFocus();
  const { ref, focused } = useFocusable({
    saveLastFocusedChild: true,
    focusKey: navKey,
    onFocus: () => {
      switch (navKey) {
        case NAVBAR.HOME:
          homeNav();
          onNavFocus();
          break;
        case NAVBAR.MOVIES:
          moviesNav();
          onNavFocus();
          break;
        default:
          break;
      }
    },
  });

  return (
    <NavElement ref={ref} $focused={focused} $isActiveNav={isActiveNav}>
      {label}
    </NavElement>
  );
};
