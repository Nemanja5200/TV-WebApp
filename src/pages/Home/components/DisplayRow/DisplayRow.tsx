import { FC, useRef } from "react";
import { DisplayRowPropsType } from "@/pages/Home/components/DisplayRow/types/DisplayRowProps.ts";
import {
  Cardswrapper,
  DisplayRowWrapper,
  RowHeader,
} from "@/pages/Home/components/DisplayRow/style/DisplayRow.style.ts";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { Card } from "@/pages/Home/components";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";
export const DisplayRow: FC<DisplayRowPropsType> = ({
  header,
  focusKey: focusMovie,
  onFocus: CardFocus,
  data,
  focusElement,
}) => {
  const { ref } = useFocusable({
    focusKey: focusMovie,
    onFocus: CardFocus,
    saveLastFocusedChild: true,
    focusable: true,
    trackChildren: true,
  });

  const { scrollingRefHorizontal, HorizontalScroll } = useScrollOnFocus();
  return (
    <>
      <FocusContext.Provider value={focusMovie}>
        <DisplayRowWrapper ref={ref}>
          <RowHeader>{header}</RowHeader>
          <Cardswrapper ref={scrollingRefHorizontal}>
            {data.results.map((movie, index) => (
              <Card
                key={movie.id || index}
                focusKey={focusMovie + index}
                title={movie.title}
                poster={movie.poster}
                onFocus={(focusDetails) => {
                  HorizontalScroll(focusDetails);
                }}
                focusElement={focusElement}
                isLastCard={index === data.results.length - 1}
              />
            ))}
          </Cardswrapper>
        </DisplayRowWrapper>
      </FocusContext.Provider>
    </>
  );
};
