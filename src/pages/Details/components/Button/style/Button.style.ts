import styled from "styled-components";
import {
  ButtonStyleType,
  ImageStyleType,
} from "@/pages/Details/types/PropTypes.ts";

export const ButtonContainer = styled.div<ButtonStyleType>`
  position: relative;
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width || "auto"};
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height || "auto"};
  padding: ${({ $padding }) =>
    typeof $padding === "number" ? `${$padding}px` : $padding || "0"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#2F2F2F"};
  margin: ${({ $margin }) =>
    typeof $margin === "number" ? `${$margin}px` : $margin || "0"};
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

export const WatchIconContainer = styled.div`
  width: 24;
  height: 24;
  angle: 0 deg;
  gap: 10px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WatchIcon = styled.img`
  width: 15px;
  height: 17px;
  angle: 0 deg;
  opacity: 1;
`;
export const BackIcon = styled.img`
  position: absolute;
  width: 31;
  height: 39;
  angle: 90 deg;
  opacity: 1;
  top: 8px;
  left: 4px;
`;

export const TextContainer = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 8%;
  text-transform: uppercase;
`;
