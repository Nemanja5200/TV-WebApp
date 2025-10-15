import { FC } from "react";
import {
  BackIcon,
  BackIconContainer,
  ButtonContainer,
} from "@/pages/Details/components/Button/style/Button.style.ts";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";
import { ButtonPropsType } from "@/pages/Details/types/PropTypes.ts";

export const Button: FC<ButtonPropsType> = ({
  $width,
  $height,
  $backgroundColor,
  $padding,
  IconIMG,
}) => {
  return (
    <>
      <ButtonContainer
        $width={$width}
        $height={$height}
        $padding={$padding}
        $backgroundColor={$backgroundColor}
      >
        <BackIconContainer>
          <BackIcon src={IconIMG} />
        </BackIconContainer>
      </ButtonContainer>
    </>
  );
};
