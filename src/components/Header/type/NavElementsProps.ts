export interface NavItemProps {
  label: string;
  navKey: string;
  isActiveNav: boolean;
  onNavFocus: () => void;
}
