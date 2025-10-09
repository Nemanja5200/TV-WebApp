import "./App.css";
import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { Header, Layout } from "@/components";
import { Home } from "@/pages/Home";
import { FOCUSKEY } from "@/constants/FocusKeys.ts";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header focusKey={FOCUSKEY.NAV} />
        <Home focusKey={FOCUSKEY.HOME_ELEMENTS} />
      </Layout>
    </>
  );
}

export default App;
