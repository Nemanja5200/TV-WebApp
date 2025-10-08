import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { init } from "@noriginmedia/norigin-spatial-navigation";

init({
  distanceCalculationMethod: "center",
  debug: true,
  visualDebug: false,
  throttle: 130,
  throttleKeypresses: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
