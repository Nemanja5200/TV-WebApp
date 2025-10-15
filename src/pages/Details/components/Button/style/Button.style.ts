import styled from "styled-components";
import { ButtonStyleType } from "@/pages/Details/types/PropTypes.ts";

export const ButtonContainer = styled.div<ButtonStyleType>`
  position: relative;
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width || "auto"};
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height || "auto"};
  padding: ${({ $padding }) =>
    typeof $padding === "number" ? `${$padding}px` : $padding || "0"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#2F2F2F"};
  border-radius: 300px;
  gap: 10px;
`;
export const BackIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  angle: 90 deg;
  opacity: 1;
`;
export const BackIcon = styled.img`
  position: absolute;
  width: 31px;
  height: 31px;
  angle: 90 deg;
  opacity: 1;
  top: 8px;
  left: 4px;
`;
