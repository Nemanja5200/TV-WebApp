import { FC } from "react";
import { Header } from "@/components";
import { HomeContainer } from "@/pages/Home/style/Home.style.ts";
import { DisplayRow } from "@/pages/Home/components/DisplayRow/DisplayRow.tsx";

export const Home: FC = () => {
  return (
    <>
      <HomeContainer>
        <Header focusKey={"NAV"} />
        <DisplayRow header={"MOVIES"} />
      </HomeContainer>
    </>
  );
};
