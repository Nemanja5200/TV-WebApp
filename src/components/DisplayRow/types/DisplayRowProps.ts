import {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";
import { MoviesResponse } from "@/types/TMBDTypes.ts";
import {CardVariant} from "@/pages/Home/types/Card.ts";

export interface DisplayRowPropsType {
  header?: string;
  focusKey: string;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails,
  ) => void;
  data: MoviesResponse;
  focusElement?: string;
  cardType: CardVariant;
}
