import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { IMAGE_PATHS } from "@/constants/imagePaths.ts";
import { BUTTON_TYPE } from "@/pages/Details/components/Button/consts/ButtonType.ts";

export const buttonConfigs = {
  back: {
    $width: 112,
    $height: 64,
    $ImgWidth: 31,
    $ImgHeight: 39,
    $padding: "8px 32px",
    $backgroundColor: "#2F2F2F",
    IconIMG: IMAGE_PATHS.BACKICON,
    buttonType: BUTTON_TYPE.BACK,
    $margin: "0px 0px 44px 0px",
    focusKey: FOCUSKEY.BACKBTN,
  },
  watch_now: {
    $width: 286,
    $height: 78,
    $ImgWidth: 13,
    $ImgHeight: 4,
    $padding: "27px 55px",
    $backgroundColor: "#2F2F2F",
    IconIMG: IMAGE_PATHS.WATCHICON,
    label: "WATCH NOW",
    buttonType: BUTTON_TYPE.WATCH_NOW,
    focusKey: FOCUSKEY.WATCH_NOWBTN,
  },
};
