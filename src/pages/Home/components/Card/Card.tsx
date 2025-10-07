import { FC } from "react";
import {
  CardContainer,
  CardPoster,
  CardTitle,
  CardTitleWrapper,
} from "@/pages/Home/components/Card/style/Card.style.ts";

export const Card: FC = () => {
  return (
    <>
      <CardContainer>
        <CardPoster src="/assets/Example.png" />
        <CardTitleWrapper>
          <CardTitle>After the Rain</CardTitle>
        </CardTitleWrapper>
      </CardContainer>
    </>
  );
};
