import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PageLoading = lazy(() => import("./pages/PageLoading.tsx"));
const Page404 = lazy(() => import("./pages/Page404.tsx"));
const PageLogin = lazy(() => import("./pages/PageLogin.tsx"));
const PageRegister = lazy(() => import("./pages/PageRegister.tsx"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/login" Component={PageLogin} />
          <Route path="/register" Component={PageRegister} />
          <Route path="*" Component={Page404} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
