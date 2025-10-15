import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { NAVBAR } from "@/components/Header/type/NavElements.ts";

export const useFocusManager = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.returnFromDetails) {
      setFocus(NAVBAR.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (location.state?.returnFromDetails && location.state?.focusKey) {
      setTimeout(() => {
        setFocus(location.state.focusKey);
        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }, 100);
    }
  }, [location, navigate]);

  return {};
};
