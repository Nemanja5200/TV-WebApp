import { FC } from 'react';
import {ContentWrapper} from "@/style/App.style.ts";
import {IMAGE_PATHS} from "@/constants/imagePaths.ts";
import {LayoutPropsType} from "@/components/Layout/types/LayoutProps.ts";



export const Layout: FC<LayoutPropsType> = ({children}) => {
  return (

      <ContentWrapper $backgroundIMG={IMAGE_PATHS.TV_BACKGROUND}>
          {children}
      </ContentWrapper>
  );
};


