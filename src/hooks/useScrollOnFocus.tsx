import { useCallback, useRef } from "react";

export const useScrollOnFocus = () => {
  const scrollingRef = useRef<HTMLDivElement>(null);

  const VerticalScroll = useCallback(
    ({ y }: { y: number }) => {
      const offset = 100;
      if (scrollingRef.current) {
        scrollingRef.current.scrollTo({
          top: y - offset,
          behavior: "smooth",
        });
      }
    },
    [scrollingRef],
  );
  return {
    VerticalScroll,
    scrollingRef,
  };
};
