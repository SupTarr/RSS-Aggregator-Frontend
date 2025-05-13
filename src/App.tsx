import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DelayRender from "./components/DelayRender.tsx";

const PageLoading = lazy(() => import("./pages/PageLoading.tsx"));
const Page404 = lazy(() => import("./pages/Page404.tsx"));
const PageLogin = lazy(() => import("./pages/PageLogin.tsx"));
const PageRegister = lazy(() => import("./pages/PageRegister.tsx"));

const App = () => {
  return (
    <BrowserRouter>
      <DelayRender delay={500}>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/login" Component={PageLogin} />
            <Route path="/register" Component={PageRegister} />
            <Route path="*" Component={Page404} />
          </Routes>
        </Suspense>
      </DelayRender>
    </BrowserRouter>
  );
};

export default App;
