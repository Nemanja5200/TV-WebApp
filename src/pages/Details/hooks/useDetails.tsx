import { useBackgroundContext } from "@/context/BackgroundContext.tsx";
import { useEffect } from "react";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants/Routes.ts";

export const useDetails = () => {
  const { setBackgroundColor, setBackgroundImg } = useBackgroundContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setBackgroundColor("#151515");
    setBackgroundImg(undefined);
    setFocus(FOCUSKEY.WATCH_NOWBTN);
  }, [setBackgroundColor, setBackgroundImg]);

  const onBackClick = () => {
    navigate(location.state?.from || ROUTES.HOME, {
      state: {
        focusKey: location.state?.focusKey,
        returnFromDetails: true,
      },
    });
  };

  return {
    onBackClick,
  };
};
