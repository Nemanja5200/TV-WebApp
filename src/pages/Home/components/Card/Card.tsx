import { FC } from "react";
import {
  CardContainer,
  CardPoster,
  CardTitle,
  CardTitleWrapper,
} from "@/pages/Home/components/Card/style/Card.style.ts";
import { CardProps } from "@/pages/Home/types/HomeProps.ts";
import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { IMAGE_HOME_URL } from "@/utils/constants/Links.ts";

export const Card: FC<CardProps> = ({
  focusKey: cardFocus,
  poster,
  title,
  onFocus: CardFocus,
  isLastCard,
  focusElement,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: cardFocus,
    onFocus: CardFocus,
    onArrowPress: (direction) => {
      if (direction === "right" && isLastCard) {
        {
          setFocus(focusElement);
          return false;
        }
      }
      return true;
    },
  });
  return (
    <>
      <CardContainer ref={ref} $focused={focused}>
        <CardPoster src={`${IMAGE_HOME_URL}${poster}`} />
        <CardTitleWrapper>
          <CardTitle>{title}</CardTitle>
        </CardTitleWrapper>
      </CardContainer>
    </>
  );
};
