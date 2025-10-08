import { FC } from "react";
import { Header } from "@/components";
import { HomeContainer, RowsContainer } from "@/pages/Home/style/Home.style.ts";
import { DisplayRow } from "@/pages/Home/components/DisplayRow/DisplayRow.tsx";
import { ROWNAMES } from "@/pages/Home/types/DisplayRowNames.ts";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useScrollOnFocus } from "@/pages/Home/hooks/useScrollOnFocus.tsx";

export const Home: FC = () => {
  const { scrollingRef, VerticalScroll } = useScrollOnFocus();

  return (
    <>
      <HomeContainer>
        <Header focusKey={FOCUSKEY.NAV} onFocus={VerticalScroll} />
        <RowsContainer ref={scrollingRef}>
          <DisplayRow
            header={ROWNAMES.MOVIES}
            focusKey={FOCUSKEY.MOVIES}
            onFocus={VerticalScroll}
          />
          <DisplayRow
            header={ROWNAMES.SERIES}
            focusKey={FOCUSKEY.SERIES}
            onFocus={VerticalScroll}
          />

          <DisplayRow
            header={ROWNAMES.SERIES}
            focusKey={"Test"}
            onFocus={VerticalScroll}
          />
        </RowsContainer>
      </HomeContainer>
    </>
  );
};
