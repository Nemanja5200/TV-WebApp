import { FC } from "react";
import { DetailsPageWrapper } from "@/pages/Details/style/Details.style.ts";
import { Button } from "@/pages/Details/components";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";

export const Details: FC = () => {
  return (
    <>
      <DetailsPageWrapper>
        <Button
          $width={112}
          $height={64}
          $padding="8px 32px"
          $backgroundColor="#2F2F2F"
          IconIMG={IMAGE_PATHS.BACKICON}
        />
      </DetailsPageWrapper>
    </>
  );
};
