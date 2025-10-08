import { FC } from "react";
import {
  CardContainer,
  CardPoster,
  CardTitle,
  CardTitleWrapper,
} from "@/pages/Home/components/Card/style/Card.style.ts";
import { CardProps } from "@/pages/Home/types/HomeProps.ts";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

export const Card: FC<CardProps> = ({ focusKey }) => {
  const { ref, focused } = useFocusable({
    focusKey: focusKey,
  });
  return (
    <>
      <CardContainer ref={ref} focused={focused}>
        <CardPoster src="/assets/Example.png" />
        <CardTitleWrapper>
          <CardTitle>After the Rain</CardTitle>
        </CardTitleWrapper>
      </CardContainer>
    </>
  );
};
