import "./App.css";
import { GlobalStyles } from "@/style/GlobalStyle.ts";
import { Layout } from "@/components";
import { Home } from "@/pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
