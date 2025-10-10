import "./App.css";
import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { Header, Layout } from "@/components";
import { Home } from "@/pages/Home";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "@/utils/constants/Routes.ts";
import { Movies } from "@/pages/Movies";
import { BackgroundProvider } from "@/context/BackgroundContext.tsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <BackgroundProvider>
        <Layout>
          <Header focusKey={FOCUSKEY.NAV} />
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={<Home focusKey={FOCUSKEY.HOME_ELEMENTS} />}
            ></Route>
            <Route
              path={ROUTES.MOVIES}
              element={<Movies focusKey={FOCUSKEY.MOVIES_PAGE} />}
            ></Route>
          </Routes>
        </Layout>
      </BackgroundProvider>
    </>
  );
}

export default App;
