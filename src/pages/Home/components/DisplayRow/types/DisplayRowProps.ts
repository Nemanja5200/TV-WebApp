import {
  FocusableComponentLayout,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";
import { MoviesResponse } from "@/types/TMBDTypes.ts";

export interface DisplayRowPropsType {
  header: string;
  focusKey: string;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails,
  ) => void;
  data: MoviesResponse;
  focusElement: string;
}
