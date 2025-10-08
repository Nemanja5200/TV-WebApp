import {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";

export interface HomeProps {
  focusKey: string;
}

export interface CardProps {
  focusKey: string;
  poster: string | null;
  title: string;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails,
  ) => void;
}
