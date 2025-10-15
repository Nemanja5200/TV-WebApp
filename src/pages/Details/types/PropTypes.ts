import { ButtonType } from "@/pages/Details/components/Button/consts/ButtonType.ts";

export interface ButtonStyleType {
  $width?: string | number;
  $height?: string | number;
  $padding?: number | string;
  $backgroundColor?: string;
  $margin?: string | number;
}

export interface ButtonPropsType extends ButtonStyleType, ImageStyleType {
  onClick?: () => void;
  label?: string;
  IconIMG?: string;
  buttonType: ButtonType;
}

export interface ImageStyleType {
  $ImgWidth?: string | number;
  $ImgHeight?: string | number;
}
