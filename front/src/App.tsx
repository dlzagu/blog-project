import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
import { useAppDispatch } from "./app/hooks";
import { Alert, Footer, Header } from "./components";
import { PageRender } from "./customRouter";
import { getBlogs, getCategories, refreshToken } from "./features";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogs());

    const isLoggedIn = localStorage.getItem("loggedIn");
    dispatch(refreshToken(isLoggedIn));

    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, mixins }}>
        <Header />
        <Alert />

        <div className="relative top-16">
          <Routes>
            <Route path="/" element={<PageRender />} />
            <Route path="/:page" element={<PageRender />} />
            <Route path="/:page/:slug" element={<PageRender />} />
          </Routes>
        </div>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
