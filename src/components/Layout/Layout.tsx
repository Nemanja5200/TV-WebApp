import { FC } from "react";
import { ContentWrapper } from "@/style/App.style.ts";
import { LayoutPropsType } from "@/components/Layout/types/LayoutProps.ts";
import { useBackgroundContext } from "@/context/BackgroundContext.tsx";

export const Layout: FC<LayoutPropsType> = ({ children }) => {
  const { backgroundImg, backgroundColor } = useBackgroundContext();
  return (
    <ContentWrapper
      $backgroundIMG={backgroundImg}
      $backgroundColor={backgroundColor}
    >
      {children}
    </ContentWrapper>
  );
};
