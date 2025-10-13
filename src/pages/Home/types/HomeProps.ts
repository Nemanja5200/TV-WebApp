import {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";
import {CardVariant} from "@/pages/Home/types/Card.ts";

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
  focusElement?: string;
  isLastCard: boolean;
  cardType:CardVariant,
}
