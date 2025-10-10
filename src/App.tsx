import "./App.css";
import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { Header, Layout } from "@/components";
import { Home } from "@/pages/Home";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "@/utils/constants/Routes.ts";
import { Movies } from "@/pages/Movies";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header focusKey={FOCUSKEY.NAV} />
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Home focusKey={FOCUSKEY.HOME_ELEMENTS} />}
          ></Route>
          <Route path={ROUTES.MOVIES} element={<Movies />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
