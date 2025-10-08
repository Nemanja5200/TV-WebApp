import { FC } from "react";
import {
  CardContainer,
  CardPoster,
  CardTitle,
  CardTitleWrapper,
} from "@/pages/Home/components/Card/style/Card.style.ts";
import { CardProps } from "@/pages/Home/types/HomeProps.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { IMAGE_HOME_URL } from "@/utils/constants/Links.ts";

export const Card: FC<CardProps> = ({
  focusKey,
  poster,
  title,
  onFocus: CardFocus,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: focusKey,
    onFocus: CardFocus,
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
