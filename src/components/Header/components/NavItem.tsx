import { FC } from "react";
import { NavElement } from "@/components/Header/styles/Header.style.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { NavItemProps } from "@/components/Header/type/NavElementsProps.ts";
import { NAVBAR } from "@/components/Header/type/NavElements.ts";
import { useNavFocus } from "@/components/Header/hooks/useNavFocus.tsx";

export const NavItem: FC<NavItemProps> = ({ label, navKey }) => {
  const { homeNav, moviesNav } = useNavFocus();
  const { ref, focused } = useFocusable({
    focusKey: navKey,
    onFocus: () => {
      switch (navKey) {
        case NAVBAR.HOME:
          homeNav();
          break;
        case NAVBAR.MOVIES:
          moviesNav();
          break;
        default:
          break;
      }
    },
  });

  return (
    <NavElement ref={ref} $focused={focused}>
      {label.toUpperCase()}
    </NavElement>
  );
};
