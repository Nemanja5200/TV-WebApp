import "./App.css";
import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { Header, Layout } from "@/components";
import { Home } from "@/pages/Home";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "@/utils/constants/Routes.ts";
import { Movies } from "@/pages/Movies";
import { BackgroundProvider } from "@/context/BackgroundContext.tsx";
import { Details } from "@/pages/Details/Details.tsx";

function App() {
  const ROUTES_WITHOUT_HEADER = [ROUTES.DETAILS];
  const location = useLocation();
  const shouldShowHeader = !ROUTES_WITHOUT_HEADER.includes(location.pathname);
  return (
    <>
      <GlobalStyles />
      <BackgroundProvider>
        <Layout>
          {shouldShowHeader && <Header focusKey={FOCUSKEY.NAV} />}
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={<Home focusKey={FOCUSKEY.HOME_ELEMENTS} />}
            ></Route>
            <Route
              path={ROUTES.MOVIES}
              element={<Movies focusKey={FOCUSKEY.MOVIES_PAGE} />}
            ></Route>
            <Route path={ROUTES.DETAILS} element={<Details />}></Route>
          </Routes>
        </Layout>
      </BackgroundProvider>
    </>
  );
}

export default App;
