import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants/Routes.ts";

export const useNavFocus = () => {
  const navigate = useNavigate();

  const homeNav = () => {
    navigate(ROUTES.HOME);
  };

  const moviesNav = () => {
    navigate(ROUTES.MOVIES);
  };

  return {
    homeNav,
    moviesNav,
  };
};
