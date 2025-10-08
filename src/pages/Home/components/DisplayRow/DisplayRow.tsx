import { FC } from "react";
import { DisplayRowPropsType } from "@/pages/Home/components/DisplayRow/types/DisplayRowProps.ts";
import {
  Cardswrapper,
  DisplayRowWrapper,
  RowHeader,
} from "@/pages/Home/components/DisplayRow/style/DisplayRow.style.ts";
import { Card } from "@/pages/Home/components/Card/Card.tsx";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
export const DisplayRow: FC<DisplayRowPropsType> = ({
  header,
  focusKey: focusMovie,
  onFocus: CardFocus,
}) => {
  const { ref } = useFocusable({
    focusKey: focusMovie,
    onFocus: CardFocus,
    saveLastFocusedChild: false,
    focusable: true,
  });

  return (
    <>
      <FocusContext.Provider value={focusMovie}>
        <DisplayRowWrapper ref={ref}>
          <RowHeader>{header}</RowHeader>
          <Cardswrapper>
            <Card focusKey={focusMovie + "1"} />
            <Card focusKey={focusMovie + "2"} />
            <Card focusKey={focusMovie + "3"} />
            <Card focusKey={focusMovie + "4"} />
          </Cardswrapper>
        </DisplayRowWrapper>
      </FocusContext.Provider>
    </>
  );
};
