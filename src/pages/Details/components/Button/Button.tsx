import { FC } from "react";
import {
  BackIcon,
  BackIconContainer,
  ButtonContainer,
  TextContainer,
  WatchIcon,
  WatchIconContainer,
} from "@/pages/Details/components/Button/style/Button.style.ts";
import { ButtonPropsType } from "@/pages/Details/types/PropTypes.ts";
import { BUTTON_TYPE } from "@/pages/Details/components/Button/consts/ButtonType.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";

export const Button: FC<ButtonPropsType> = ({
  $width,
  $height,
  $backgroundColor,
  $padding,
  IconIMG,
  label,
  buttonType,
  $margin,
  focusKey,
  onClick,
}) => {
  let content = null;

  switch (buttonType) {
    case BUTTON_TYPE.BACK:
      content = (
        <BackIconContainer>
          <BackIcon src={IconIMG} />
        </BackIconContainer>
      );
      break;
    case BUTTON_TYPE.WATCH_NOW:
      content = (
        <WatchIconContainer>
          <WatchIcon src={IconIMG} />
          <TextContainer>{label}</TextContainer>
        </WatchIconContainer>
      );
      break;
    default:
      content = null;
  }
  const { ref, focused } = useFocusable({
    focusKey: focusKey,
    onEnterPress: () => {
      if (focusKey === FOCUSKEY.BACKBTN) {
        if (onClick) {
          onClick();
        }
      }
    },
  });

  return (
    <ButtonContainer
      ref={ref}
      $width={$width}
      $height={$height}
      $padding={$padding}
      $backgroundColor={$backgroundColor}
      $margin={$margin}
      $focused={focused}
    >
      {content}
    </ButtonContainer>
  );
};
