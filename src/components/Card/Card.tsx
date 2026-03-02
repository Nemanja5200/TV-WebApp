import { FC } from "react";
import { CardProps } from "@/pages/Home/types/HomeProps.ts";
import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import {
  IMAGE_HOME_URL,
  IMAGE_MOVIES_URL,
} from "@/constants/constants/Links.ts";
import {
  CardContainer,
  CardPoster,
  CardTitle,
  CardTitleWrapper,
} from "@/components/Card/style/Card.style.ts";
import { CARDTYPE } from "@/components/Card/consts/CARDTYPE.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants/constants/Routes.ts";
export const Card: FC<CardProps> = ({
  focusKey: cardFocus,
  poster,
  title,
  onFocus: CardFocus,
  isLastCard,
  focusElement,
  cardType,
  onCardFocus,
  id,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ref, focused } = useFocusable({
    focusKey: cardFocus,
    onFocus: (layout, props, details) => {
      if (onCardFocus) {
        onCardFocus(id);
      }
      CardFocus(layout, props, details);
    },
    onArrowPress: (direction) => {
      if (
        direction === "right" &&
        isLastCard &&
        (cardFocus.includes(FOCUSKEY.NOW_PLAYING) ||
          cardFocus.includes(FOCUSKEY.TRENDING_MOVIES) ||
          cardFocus.includes(FOCUSKEY.POPULAR_TVSHOWS))
      ) {
        {
          setFocus(focusElement as string);
          return false;
        }
      }
      return true;
    },

    onEnterPress: () => {
      navigate(ROUTES.DETAILS, {
        state: {
          from: location.pathname,
          focusKey: cardFocus,
          id: id,
        },
      });
    },
  });
  return (
    <>
      <CardContainer ref={ref} $focused={focused} $variant={cardType}>
        <CardPoster
          src={`${
            cardType === CARDTYPE.VERTICAL ? IMAGE_HOME_URL : IMAGE_MOVIES_URL
          }${poster}`}
        />
        <CardTitleWrapper>
          <CardTitle>{title}</CardTitle>
        </CardTitleWrapper>
      </CardContainer>
    </>
  );
};
