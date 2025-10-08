import { FC } from "react";
import { NavElement } from "@/components/Header/styles/Header.style.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { NavItemProps } from "@/components/Header/type/NavElementsProps.ts";

export const NavItem: FC<NavItemProps> = ({
  label,
  navKey,
  onFocus: navFocus,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: navKey,
    onFocus: navFocus,
  });

  return (
    <NavElement ref={ref} focused={focused}>
      {label.toUpperCase()}
    </NavElement>
  );
};
