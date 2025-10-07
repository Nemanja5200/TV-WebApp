import { FC } from "react";
import { DisplayRowPropsType } from "@/pages/Home/components/DisplayRow/types/DisplayRowProps.ts";
import {
  Cardswrapper,
  DisplayRowWrapper,
  RowHeader,
} from "@/pages/Home/components/DisplayRow/style/DisplayRow.style.ts";
import { Card } from "@/pages/Home/components/Card/Card.tsx";

export const DisplayRow: FC<DisplayRowPropsType> = ({ header }) => {
  return (
    <>
      <DisplayRowWrapper>
        <RowHeader>{header}</RowHeader>
        <Cardswrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cardswrapper>
      </DisplayRowWrapper>
    </>
  );
};
