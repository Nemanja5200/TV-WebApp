import { useCallback, useRef } from "react";

export const useScrollOnFocus = () => {
  const scrollingRefVertical = useRef<HTMLDivElement>(null);
  const scrollingRefHorizontal = useRef<HTMLDivElement>(null);

  const VerticalScroll = useCallback(
    ({ y }: { y: number }) => {
      const offset = 100;
      if (scrollingRefVertical.current) {
        scrollingRefVertical.current.scrollTo({
          top: y - offset,
          behavior: "smooth",
        });
      }
    },
    [scrollingRefVertical],
  );

  const HorizontalScroll = useCallback(
    ({ x }: { x: number }) => {
      const offset = 250;
      if (scrollingRefHorizontal.current) {
        scrollingRefHorizontal.current.scrollTo({
          left: x - offset,
          behavior: "smooth",
        });
      }
    },
    [scrollingRefHorizontal],
  );

  return {
    VerticalScroll,
    scrollingRefVertical,
    scrollingRefHorizontal,
    HorizontalScroll,
  };
};
