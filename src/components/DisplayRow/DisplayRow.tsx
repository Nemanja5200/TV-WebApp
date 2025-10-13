import { FC } from "react";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useScrollOnFocus } from "@/hooks/useScrollOnFocus.tsx";
import {
  Cardswrapper,
  DisplayRowWrapper,
  RowHeader,
} from "@/components/DisplayRow/style/DisplayRow.style.ts";
import { DisplayRowPropsType } from "@/components/DisplayRow/types/DisplayRowProps.ts";
import { Card } from "@/components";
export const DisplayRow: FC<DisplayRowPropsType> = ({
  header,
  focusKey: focusMovie,
  onFocus: CardFocus,
  data,
  focusElement,
  cardType,
}) => {
  const { ref } = useFocusable({
    focusKey: focusMovie,
    onFocus: CardFocus,
    saveLastFocusedChild: true,
    focusable: true,
    trackChildren: true,
    isFocusBoundary: false,
  });

  const { scrollingRefHorizontal, HorizontalScroll } = useScrollOnFocus();
  return (
    <>
      <FocusContext.Provider value={focusMovie}>
        <DisplayRowWrapper ref={ref}>
          {header ? <RowHeader>{header}</RowHeader> : null}
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
                cardType={cardType}
              />
            ))}
          </Cardswrapper>
        </DisplayRowWrapper>
      </FocusContext.Provider>
    </>
  );
};
