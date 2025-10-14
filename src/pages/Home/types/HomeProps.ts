import {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";
import { CardVariant } from "@/pages/Home/types/Card.ts";

export interface HomeProps {
  focusKey: string;
}

export interface CardProps {
  id: number;
  focusKey: string;
  poster: string | null;
  title: string;
  onFocus: (
    layout: FocusableComponentLayout,
    props: unknown,
    details: FocusDetails,
  ) => void;
  focusElement?: string;
  isLastCard: boolean;
  cardType: CardVariant;
  onCardFocus?: (id: number) => void;
}
