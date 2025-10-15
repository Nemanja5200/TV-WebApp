export interface ButtonStyleType {
  $width?: string | number;
  $height?: string | number;
  $padding?: number | string;
  $backgroundColor?: string;
}

export interface ButtonPropsType extends ButtonStyleType {
  onClick?: () => void;
  label?: string;
  IconIMG?: string;
}
